import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './models/venue_type.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Joylarda bo'ladigan yig'inlar tiplari")
@Controller('venue-type')
export class VenueTypeController {
    constructor(private readonly venueTypeService: VenueTypeService) { }

    @ApiOperation({ summary: "Joylarda bo'ladigan yig'inlar tiplarni yaratish" })
    @Post("create")
    async createVenueType(@Body() createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType> {
        return this.venueTypeService.createVenueType(createVenueTypeDto);
    }

    @ApiOperation({ summary: "Joylarda bo'ladigan yig'inlar tiplarni ko'rish" })
    @Get('find-all')
    async getAllVenueType() {
        return this.venueTypeService.getAllVenueType();
    }

    @ApiOperation({ summary: "Joylarda bo'ladigan yig'inlar tiplarni ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneVenueType(@Param("id") id: string): Promise<VenueType> {
        return this.venueTypeService.getOneVenueType(id);
    }

    @ApiOperation({ summary: "Joylarda bo'ladigan yig'inlar tiplarni ID si bo'yicha o'chirish qilish" })
    @Delete('delete/:id')
    async delOneVenueType(@Param("id") id: string) {
        return this.venueTypeService.delOneVenueType(id);
    }

    @ApiOperation({ summary: "Joylarda bo'ladigan yig'inlar tiplarni ID si bo'yicha o'zgartirish qilish" })
    @Put("update/:id")
    async updateVenueType(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
        return this.venueTypeService.updateVenueType(id, updateVenueTypeDto);
    }
}
