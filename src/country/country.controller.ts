import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './models/country.model';

@ApiTags("Mamlakatlar")
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiOperation({summary: "Mamlakatni yaratish"})
  @Post("create")
    async createCountry(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
        return this.countryService.createCountry(createCountryDto);
    }

    @ApiOperation({summary: "Mamlakatni ko'rish"})
    @Get('find-all')
    async getAllCountry() {
        return this.countryService.getAllCountry();
    }

    @ApiOperation({summary: "Mamlakatni ID si bo'yicha ko'rish"})
    @Get('find/:id')
    async getOneCountry(@Param("id") id: string): Promise<Country> {
        return this.countryService.getOneCountry(id);
    }

    @ApiOperation({summary: "Mamlakatni ID si bo'yicha o'chirish"})
    @Delete('delete/:id')
    async delOneCountry(@Param("id") id: string){
        return this.countryService.delOneCountry(id);
    }

    @ApiOperation({summary: "Mamlakatni ID si bo'yicha o'zgartirish"})
    @Put("update/:id")
    async updateCountry(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto){
        return this.countryService.updateCountry(id, updateCountryDto);
    }
}
