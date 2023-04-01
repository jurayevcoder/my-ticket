import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './models/seat_type.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("O'rindiq joyi tiplari")
@Controller('seat-type')
export class SeatTypeController {
    constructor(private readonly seatTypeService: SeatTypeService) { }

    @ApiOperation({ summary: "O'rindiq joyi tiplarini yaratish" })
    @Post("create")
    async createSeatType(@Body() createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
        return this.seatTypeService.createSeatType(createSeatTypeDto);
    }

    @ApiOperation({ summary: "O'rindiq joyi tiplarini ko'rish" })
    @Get('find-all')
    async getAllSeatType() {
        return this.seatTypeService.getAllSeatType();
    }

    @ApiOperation({ summary: "O'rindiq joyi tiplarini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneSeatType(@Param("id") id: string): Promise<SeatType> {
        return this.seatTypeService.getOneSeatType(id);
    }

    @ApiOperation({ summary: "O'rindiq joyi tiplarini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneSeatType(@Param("id") id: string) {
        return this.seatTypeService.delOneSeatType(id);
    }

    @ApiOperation({ summary: "O'rindiq joyi tiplarini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateSeatType(@Param('id') id: string, @Body() updateSeatTypeDto: UpdateSeatTypeDto) {
        return this.seatTypeService.updateSeatType(id, updateSeatTypeDto);
    }
}
