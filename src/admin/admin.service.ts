import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UpdateAdminDto } from './dto/update-admin.dto';
import *  as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { Response } from 'express';
import { LoginAdminDto } from './dto/login-admin.dto';
import { RegisterAdminDto } from './dto/register-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepo: typeof Admin,
    private readonly jwtService: JwtService,
  ) { }
  async register(registerAdminDto: RegisterAdminDto, res: Response) {
    if (registerAdminDto.password !== registerAdminDto.confirm_password) {
      throw new BadRequestException('Password is not match!');
    }
    const hashed_password = await bcrypt.hash(registerAdminDto.password, 7);
    const newAdmin = await this.adminRepo.create({
      ...registerAdminDto,
      hashed_password: hashed_password,
    });

    const tokens = await this.getTokens(newAdmin)

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedAdmin = await this.adminRepo.update({
      hashed_refresh_token: hashed_refresh_token,
      is_active: true,
      is_admin: true
    },
      { where: { id: newAdmin.id }, returning: true },)

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 42 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin registered!',
      user: updatedAdmin[1][0],
      tokens,
    }
    return response;
  }


  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const admin = await this.adminRepo.findOne({ where: { email: loginAdminDto.email } });
    if (!admin) {
      throw new UnauthorizedException('Admin not foun'!)
    }
    const { password } = loginAdminDto;
    const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
    if (!isMatchPass) {
      throw new UnauthorizedException('Password error');
    }

    const tokens = await this.getTokens(admin)

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedAdmin = await this.adminRepo.update({
      hashed_refresh_token: hashed_refresh_token,
      is_active: true
    },
      { where: { id: admin.id }, returning: true },)

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 42 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin login in!',
      user: updatedAdmin[1][0],
      tokens,
    }
    return response;
  }


  async logout(refreshToken: string, res: Response) {
    const adminData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    })
    if (!adminData) {
      throw new ForbiddenException('Admin not found');
    }
    const updatedAdmin = await this.adminRepo.update(
      { hashed_refresh_token: null, is_active: false },
      { where: { id: adminData.id }, returning: true },
    )
    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin logged out successfully',
      customer: updatedAdmin[1][0],
    }
    return response;

  }

  async getAllAdmin() {
    const adminies = await this.adminRepo.findAll({ include: { all: true } });
    return adminies;
  }

  async getOneAdmin(id: string): Promise<Admin> {
    const admin = await this.adminRepo.findByPk(id);
    return admin;
  }

  async delOneAdmin(id: string) {
    return this.adminRepo.destroy({ where: { id } });
  }

  async updateAdmin(id: string, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepo.update(updateAdminDto, {
      where: { id },
    })
  }


  async refreshToken(admin_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (admin_id != decodedToken['id']) {
      throw new BadRequestException('Admin not found!');
    }
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin || !admin.hashed_refresh_token) {
      throw new BadRequestException('Admin not found!');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(admin)

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedAdmin = await this.adminRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: admin.id }, returning: true },)

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 42 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin logged in',
      customer: updatedAdmin[1][0],
      tokens,
    }
    return response;
  }


  async getTokens(admin: Admin) {
    const jwtPayload = {
      id: admin.id,
      is_creator: admin.is_admin,
      is_active: admin.is_active,
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