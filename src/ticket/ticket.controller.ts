import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './models/ticket.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Chiptalar')
@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) { }

    @ApiOperation({ summary: "Chiptani yaratish" })
    @Post("create")
    async createTicket(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
        return this.ticketService.createTicket(createTicketDto);
    }

    @ApiOperation({ summary: "Chiptani ko'rish" })
    @Get('find-all')
    async getAllTicket() {
        return this.ticketService.getAllTicket();
    }

    @ApiOperation({ summary: "Chiptani ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneTicket(@Param("id") id: string): Promise<Ticket> {
        return this.ticketService.getOneTicket(id);
    }

    @ApiOperation({ summary: "Chiptani ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneTicket(@Param("id") id: string) {
        return this.ticketService.delOneTicket(id);
    }

    @ApiOperation({ summary: "Chiptani ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateTicket(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
        return this.ticketService.updateTicket(id, updateTicketDto);
    }
}
