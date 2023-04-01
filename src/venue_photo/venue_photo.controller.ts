import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './models/venue_photo.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Joylar Rasmi')
@Controller('venue-photo')
export class VenuePhotoController {
    constructor(private readonly venuePhotoService: VenuePhotoService) { }

    @ApiOperation({ summary: "Joy rasmini yaratish" })
    @Post("create")
    async createVenuePhoto(@Body() createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
        return this.venuePhotoService.createVenuePhoto(createVenuePhotoDto);
    }

    @ApiOperation({summary: "Joylar rasmini ko'rish"})
    @Get('find-all')
    async getAllVenuePhoto() {
        return this.venuePhotoService.getAllVenuePhoto();
    }

    @ApiOperation({summary: "Joy rasmini ID si bo'yicha ko'rish"})
    @Get('find/:id')
    async getOneVenuePhoto(@Param("id") id: string): Promise<VenuePhoto> {
        return this.venuePhotoService.getOneVenuePhoto(id);
    }

    @ApiOperation({summary: "Joy rasmini ID si bo'yicha o'chirish"})
    @Delete('delete/:id')
    async delOneVenuePhoto(@Param("id") id: string) {
        return this.venuePhotoService.delOneVenuePhoto(id);
    }

    @ApiOperation({summary: "Joy rasmini ID si bo'yisha o'zgartirish"})
    @Put("update/:id")
    async updateVenuePhoto(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
        return this.venuePhotoService.updateVenuePhoto(id, updateVenuePhotoDto);
    }
}
