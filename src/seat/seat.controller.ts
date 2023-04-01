import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './models/seat.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("O'rindiqlar")
@Controller('seat')
export class SeatController {
    constructor(private readonly seatService: SeatService) { }

    @ApiOperation({ summary: "O'rindiqni yaratish" })
    @Post("create")
    async createSeat(@Body() createSeatDto: CreateSeatDto): Promise<Seat> {
        return this.seatService.createSeat(createSeatDto);
    }

    @ApiOperation({ summary: "O'rindiqni ko'rish" })
    @Get('find-all')
    async getAllSeat() {
        return this.seatService.getAllSeat();
    }

    @ApiOperation({summary: "O'rindiqni ID si bo'yicha ko'rish "})
    @Get('find/:id')
    async getOneSeat(@Param("id") id: string): Promise<Seat> {
        return this.seatService.getOneSeat(id);
    }

    @ApiOperation({summary: "O'rindiqni ID si bo'yicha o'chirish "})
    @Delete('delete/:id')
    async delOneSeat(@Param("id") id: string) {
        return this.seatService.delOneSeat(id);
    }

    @ApiOperation({summary: "O'rindiqni ID si bo'yicha o'zgartirish "})
    @Put("update/:id")
    async updateSeat(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
        return this.seatService.updateSeat(id, updateSeatDto);
    }
}
