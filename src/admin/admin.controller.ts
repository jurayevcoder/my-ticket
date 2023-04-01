import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { AdminService } from './admin.service';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';

@ApiTags("Adminlar")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @ApiOperation({ summary: "Admin saytdan ro'yxatdan o'tishi! --- Buni faqat Owner yoki SuperAdmin qiladi. Admini o'zi ro'yxatdan o'ta olmaydi" })
  @Post('register')
  async register(@Body() registerAdminDto: RegisterAdminDto, @Res({ passthrough: true }) res: Response) {
    return this.adminService.register(registerAdminDto, res);
  }

  @ApiOperation({summary: "Admin saytga kirishi"})
  @Post('login')
  async login(@Body() loginAdminDto: LoginAdminDto, @Res({ passthrough: true }) res: Response) {
    return this.adminService.login(loginAdminDto, res);
  }


  @ApiOperation({ summary: "Adminni saytdan chiqish" })
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,

  ) {
    return this.adminService.logout(refreshToken, res)
  }

  @ApiOperation({ summary: "Adminni ko'rish" })
  @Get('find-all')
  async getAllAdmin() {
    return this.adminService.getAllAdmin();
  }

  @ApiOperation({ summary: "Adminni ID si bo'yicha ko'rish" })
  @Get('find/:id')
  async getOneAdmin(@Param("id") id: string): Promise<Admin> {
    return this.adminService.getOneAdmin(id);
  }

  @ApiOperation({ summary: "Adminni ID si bo'yicha o'chirish" })
  @Delete('delete/:id')
  async delOneAdmin(@Param("id") id: string) {
    return this.adminService.delOneAdmin(id);
  }

  @ApiOperation({ summary: "Adminni ID si bo'yicha o'zgartirish" })
  @Put("update/:id")
  async updateAdmin(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.updateAdmin(id, updateAdminDto);
  }
}
