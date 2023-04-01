import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Response } from 'express';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';
import *  as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginCustomerDto } from './dto/login-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerRepo: typeof Customer,
    private readonly jwtService: JwtService,
  ) { }
  async registration(createCustomerDto: CreateCustomerDto, res: Response) {
    const customer = await this.customerRepo.findOne({ where: { email: createCustomerDto.email } });
    if (customer) {
      throw new BadRequestException('Email already exists!');
    }
    if (createCustomerDto.password !== createCustomerDto.confirm_password) {
      throw new BadRequestException('Password is not match!');
    }

    const hashed_password = await bcrypt.hash(createCustomerDto.password, 7);
    const newCustomer = await this.customerRepo.create({
      ...createCustomerDto,
      hashed_password: hashed_password,
    });
    const tokens = await this.getTokens(
      newCustomer
    )

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedCustomer = await this.customerRepo.update({
      hashed_refresh_token: hashed_refresh_token,
    },
      { where: { id: newCustomer.id }, returning: true },)

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 42 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'User registred',
      user: updatedCustomer[1][0],
      tokens,
    }
    return response;
  }



  async login(loginCustomerDto: LoginCustomerDto, res: Response) {
    const { email, password } = loginCustomerDto;
    const customer = await this.customerRepo.findOne({ where: { email } });
    if (!customer) {
      throw new UnauthorizedException('Customer not registered');
    }
    const isMatchPass = await bcrypt.compare(password, customer.hashed_password);
    if (!isMatchPass) {
      throw new UnauthorizedException('Password error');
    }
    const tokens = await this.getTokens(customer)

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedCustomer = await this.customerRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: customer.id }, returning: true },)

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 42 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Customer logged in',
      customer: updatedCustomer[1][0],
      tokens,
    }
    return response;
  }



  async logout(refreshToken: string, res: Response) {
    const cutomerData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    })
    if (!cutomerData) {
      throw new ForbiddenException('Customer not found');
    }
    const updatedCustomer = await this.customerRepo.update(
      { hashed_refresh_token: null },
      { where: { id: cutomerData.id }, returning: true },
    )
    res.clearCookie('refresh_token');
    const response = {
      message: 'Customer logged out successfully',
      customer: updatedCustomer[1][0],
    }
    return response;

  }

  async getAllCustomer() {
    const customeries = await this.customerRepo.findAll({ include: { all: true } });
    return customeries;
  }

  async getOneCustomer(id: string): Promise<Customer> {
    const customer = await this.customerRepo.findByPk(id);
    return customer;
  }

  async delOneCustomer(id: string) {
    return this.customerRepo.destroy({ where: { id } });
  }

  async updateCustomer(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepo.update(updateCustomerDto, {
      where: { id },
    })
  }


  async refreshToken(customer_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (customer_id != decodedToken['id']) {
      throw new BadRequestException('Customer not found!');
    }
    const customer = await this.customerRepo.findOne({ where: { id: customer_id } });
    if (!customer || !customer.hashed_refresh_token) {
      throw new BadRequestException('Customer not found!');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      customer.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(customer)

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedCustomer = await this.customerRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: customer.id }, returning: true },)

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 42 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Customer logged in',
      customer: updatedCustomer[1][0],
      tokens,
    }
    return response;
  }


  async getTokens(customer: Customer) {
    const jwtPayload = {
      id: customer.id,
      email: customer.email,
      phone: customer.phone,
    }
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      })
    ])
    return {
      access_tokken: accessToken,
      refresh_token: refreshToken,
    };
  }


}
