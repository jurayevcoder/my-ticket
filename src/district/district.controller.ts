import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';


@ApiTags("Tumanlar")
@Controller('district')
export class DistrictController {
    constructor(private readonly districtService: DistrictService) { }

    @ApiOperation({ summary: "Tumani yaratish" })
    @Post("create")
    async createDistrict(@Body() createDistrictDto: CreateDistrictDto): Promise<District> {
        return this.districtService.createDistrict(createDistrictDto);
    }

    @ApiOperation({ summary: "Tumani ko'rish" })
    @Get('find-all')
    async getAllDistrict() {
        return this.districtService.getAllDistrict();
    }

    @ApiOperation({ summary: "Tumani ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneDistrict(@Param("id") id: string): Promise<District> {
        return this.districtService.getOneDistrict(id);
    }

    @ApiOperation({ summary: "Tumani ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneDistrict(@Param("id") id: string) {
        return this.districtService.delOneDistrict(id);
    }

    @ApiOperation({ summary: "Tumani ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateDistrict(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
        return this.districtService.updateDistrict(id, updateDistrictDto);
    }
}
