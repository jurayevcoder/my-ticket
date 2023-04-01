import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './models/event_type.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Yig'ining Tiplari")
@Controller('event-type')
export class EventTypeController {
    constructor(private readonly eventTypeService: EventTypeService) { }

    @ApiOperation({ summary: "Yig'ining tipini yartish" })
    @Post("create")
    async createEventType(@Body() createEventTypeDto: CreateEventTypeDto): Promise<EventType> {
        return this.eventTypeService.createEventType(createEventTypeDto);
    }

    @ApiOperation({ summary: "Yig'ining tipini ko'rish" })
    @Get('find-all')
    async getAllEventType() {
        return this.eventTypeService.getAllEventType();
    }

    @ApiOperation({ summary: "Yig'ining tipini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneEventType(@Param("id") id: string): Promise<EventType> {
        return this.eventTypeService.getOneEventType(id);
    }

    @ApiOperation({ summary: "Yig'ining tipini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneEventType(@Param("id") id: string) {
        return this.eventTypeService.delOneEventType(id);
    }

    @ApiOperation({ summary: "Yig'ining tipini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateEventType(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) {
        return this.eventTypeService.updateEventType(id, updateEventTypeDto);
    }
}
