import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './models/ticket_type.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Chipta Tipi')
@Controller('ticket-type')
export class TicketTypeController {
    constructor(private readonly ticketTypeService: TicketTypeService) { }

    @ApiOperation({ summary: "Chipta tipini yaratish" })
    @Post("create")
    async createTicketType(@Body() createTicketTypeDto: CreateTicketTypeDto): Promise<TicketType> {
        return this.ticketTypeService.createTicketType(createTicketTypeDto);
    }

    @ApiOperation({ summary: "Chipta tipini ko'rish" })
    @Get('find-all')
    async getAllTicketType() {
        return this.ticketTypeService.getAllTicketType();
    }

    @ApiOperation({ summary: "Chipta tipini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneTicketType(@Param("id") id: string): Promise<TicketType> {
        return this.ticketTypeService.getOneTicketType(id);
    }

    @ApiOperation({ summary: "Chipta tipini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneTicketType(@Param("id") id: string) {
        return this.ticketTypeService.delOneTicketType(id);
    }

    @ApiOperation({ summary: "Chipta tipini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateTicketType(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTicketTypeDto) {
        return this.ticketTypeService.updateTicketType(id, updateTicketTypeDto);
    }
}
