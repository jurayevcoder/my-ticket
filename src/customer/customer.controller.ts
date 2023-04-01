import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserSalfGuard } from '../guards/user-self.guard';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './models/customer.model';

@ApiTags("Foydalanuvchilar")
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @ApiOperation({summary: "Foydalanuvchini ro'yxatdan o'tishi"})
  @Post('register')
  async registrationn(@Body() createCustomerDto: CreateCustomerDto, @Res({ passthrough: true }) res: Response) {
    return this.customerService.registration(createCustomerDto, res);
  }

  @ApiOperation({summary: "Foydalanuvchini saytga kirishi"})
  @Post('login')
  async login(@Body() createCustomerDto: CreateCustomerDto, @Res({ passthrough: true }) res: Response) {
    return this.customerService.login(createCustomerDto, res);
  }

  @ApiOperation({summary: "Foydalanuvchini saytdan chiqishi"})
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,

  ) {
    return this.customerService.logout(refreshToken, res)
  }

  @ApiOperation({summary: "Foydalanuvchini ko'rish"})
  @UseGuards(UserSalfGuard)
  @Get('find-all')
  async getAllCustomer() {
    return this.customerService.getAllCustomer();
  }

  @ApiOperation({summary: "Foydalanuvchin ID si bo'yicha ko'rish"})
  @UseGuards(UserSalfGuard)
  @Get('find/:id')
  async getOneCustomer(@Param("id") id: string): Promise<Customer> {
    return this.customerService.getOneCustomer(id);
  }

  @ApiOperation({summary: "Foydalanuvchin ID si bo'yicha o'chirish"})
  @UseGuards(UserSalfGuard)
  @Delete('delete/:id')
  async delOneCustomer(@Param("id") id: string) {
    return this.customerService.delOneCustomer(id);
  }

  @ApiOperation({summary: "Foydalanuvchin ID si bo'yicha o'zgartirish"})
  @UseGuards(UserSalfGuard)
  @Put("update/:id")
  async updateCustomer(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomer(id, updateCustomerDto);
  }
}
