import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './models/human_category.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Yig'inga kiradigan insonlar")
@Controller('human-category')
export class HumanCategoryController {
    constructor(private readonly humanCategoryService: HumanCategoryService) { }

    @ApiOperation({ summary: "Yig'inga kiradigan insonlar kategoriyasini yaratish" })
    @Post("create")
    async createHumanCategory(@Body() createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory> {
        return this.humanCategoryService.createHumanCategory(createHumanCategoryDto);
    }

    @ApiOperation({ summary: "Yig'inga kiradigan insonlar kategoriyasini ko'rish" })
    @Get('find-all')
    async getAllHumanCategory() {
        return this.humanCategoryService.getAllHumanCategory();
    }

    @ApiOperation({summary: "Yig'inga kiradigan insonlar kategoriyasini ID si bo'yicha ko'rish"})
    @Get('find/:id')
    async getOneHumanCategory(@Param("id") id: string): Promise<HumanCategory> {
        return this.humanCategoryService.getOneHumanCategory(id);
    }

    @ApiOperation({summary: "Yig'inga kiradigan insonlar kategoriyasini ID si bo'yicha o'chirish"})
    @Delete('delete/:id')
    async delOneHumanCategory(@Param("id") id: string) {
        return this.humanCategoryService.delOneHumanCategory(id);
    }

    @ApiOperation({summary: "Yig'inga kiradigan insonlar kategoriyasini ID si bo'yicha o'zgartirish"})
    @Put("update/:id")
    async updateHumanCategory(@Param('id') id: string, @Body() updateHumanCategoryDto: UpdateHumanCategoryDto) {
        return this.humanCategoryService.updateHumanCategory(id, updateHumanCategoryDto);
    }
}
