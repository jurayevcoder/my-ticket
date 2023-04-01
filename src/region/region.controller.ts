import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './models/region.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Viloyatlar")
@Controller('region')
export class RegionController {
    constructor(private readonly regionService: RegionService) { }

    @ApiOperation({ summary: "Viloyatni yaratish" })
    @Post("create")
    async createRegion(@Body() createRegionDto: CreateRegionDto): Promise<Region> {
        return this.regionService.createRegion(createRegionDto);
    }

    @ApiOperation({ summary: "Viloyatni ko'rish" })
    @Get('find-all')
    async getAllRegion() {
        return this.regionService.getAllRegion();
    }

    @ApiOperation({ summary: "Viloyatni ID si bo'yicha ko'rish " })
    @Get('find/:id')
    async getOneRegion(@Param("id") id: string): Promise<Region> {
        return this.regionService.getOneRegion(id);
    }

    @ApiOperation({ summary: "Viloyatni ID si bo'yicha o'chirish " })
    @Delete('delete/:id')
    async delOneRegion(@Param("id") id: string) {
        return this.regionService.delOneRegion(id);
    }

    @ApiOperation({ summary: "Viloyatni ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateRegion(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
        return this.regionService.updateRegion(id, updateRegionDto);
    }
}
