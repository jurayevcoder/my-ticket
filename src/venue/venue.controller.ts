import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './models/venue.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Joylar')
@Controller('venue')
export class VenueController {
    constructor(private readonly venueService: VenueService) { }

    @ApiOperation({ summary: "Joyni yaratish" })
    @Post("create")
    async createVenue(@Body() createVenueDto: CreateVenueDto): Promise<Venue> {
        return this.venueService.createVenue(createVenueDto);
    }

    @ApiOperation({ summary: "Joylarni ko'rish" })
    @Get('find-all')
    async getAllVenue() {
        return this.venueService.getAllVenue();
    }

    @ApiOperation({summary: "Joyni ID si bo'yicha ko'rish"})
    @Get('find/:id')
    async getOneVenue(@Param("id") id: string): Promise<Venue> {
        return this.venueService.getOneVenue(id);
    }

    @ApiOperation({summary: "Joyni ID si bo'yicha o'chirish"})
    @Delete('delete/:id')
    async delOneVenue(@Param("id") id: string) {
        return this.venueService.delOneVenue(id);
    }

    @ApiOperation({summary: "Joyni ID si bo'yisha o'zgartirish"})
    @Put("update/:id")
    async updateVenue(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
        return this.venueService.updateVenue(id, updateVenueDto);
    }
}
