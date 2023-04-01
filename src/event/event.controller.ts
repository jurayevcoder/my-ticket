import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './models/event.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Yig'inlar")
@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) { }

    @ApiOperation({summary: "Yig'inni yaratish"})
    @Post("create")
    async createEvent(@Body() createEventDto: CreateEventDto): Promise<Event> {
        return this.eventService.createEvent(createEventDto);
    }

    @ApiOperation({summary: "Yig'inni ko'rish"})
    @Get('find-all')
    async getAllEvent() {
        return this.eventService.getAllEvent();
    }

    @ApiOperation({summary: "Yig'inni ID si bo'yicha ko'rish"})
    @Get('find/:id')
    async getOneEvent(@Param("id") id: string): Promise<Event> {
        return this.eventService.getOneEvent(id);
    }

    @ApiOperation({summary: "Yig'inni ID si bo'yicha o'chirish"})
    @Delete('delete/:id')
    async delOneEvent(@Param("id") id: string) {
        return this.eventService.delOneEvent(id);
    }

    @ApiOperation({summary: "Yig'inni ID si bo'yicha o'zgartirish"})
    @Put("update/:id")
    async updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
        return this.eventService.updateEvent(id, updateEventDto);
    }
}
