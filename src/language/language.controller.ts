import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './models/language.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Tillar")
@Controller('language')
export class LanguageController {
    constructor(private readonly languageService: LanguageService) { }

    @ApiOperation({ summary: "Tilni yaratish" })
    @Post("create")
    async createLanguage(@Body() createLanguageDto: CreateLanguageDto): Promise<Language> {
        return this.languageService.createLanguage(createLanguageDto);
    }

    @ApiOperation({ summary: "Tilni ko'rish" })
    @Get('find-all')
    async getAllLanguage() {
        return this.languageService.getAllLanguage();
    }

    @ApiOperation({ summary: "Tilni ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneLanguage(@Param("id") id: string): Promise<Language> {
        return this.languageService.getOneLanguage(id);
    }

    @ApiOperation({ summary: "Tilni ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneLanguage(@Param("id") id: string) {
        return this.languageService.delOneLanguage(id);
    }

    @ApiOperation({ summary: "Tilni ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateLanguage(@Param('id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
        return this.languageService.updateLanguage(id, updateLanguageDto);
    }
}
