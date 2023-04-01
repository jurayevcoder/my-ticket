import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './models/booking.model';


@ApiTags("Bron Qilshlar")
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }

  @ApiOperation({summary: "Bron qilishni yaratish"})
  @Post("create")
  async createBooking(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingService.createBooking(createBookingDto);
  }

  @ApiOperation({summary: "Bron qilishni ko'rish"})
  @Get('find-all')
  async getAllBooking() {
    return this.bookingService.getAllBooking();
  }

  @ApiOperation({summary: "Bron qilishni ID si bo'yicha ko'rish"})
  @Get('find/:id')
  async getOneBooking(@Param("id") id: string): Promise<Booking> {
    return this.bookingService.getOneBooking(id);
  }

  @ApiOperation({summary: "Bron qilishni ID si bo'yicha o'chirish"})
  @Delete('delete/:id')
  async delOneBooking(@Param("id") id: string) {
    return this.bookingService.delOneBooking(id);
  }

  @ApiOperation({summary: "Bron qilishni ID si bo'yicha o'zgartirish"})
  @Put("update/:id")
  async updateBooking(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.updateBooking(id, updateBookingDto);
  }
}
