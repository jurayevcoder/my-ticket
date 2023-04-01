import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './models/customer_card.model';

@ApiTags("Foydalanuvchi cartalari")
@Controller('customer-card')
export class CustomerCardController {
    constructor(private readonly customerCardService: CustomerCardService) { }

    @ApiOperation({ summary: "Foydalanuvchi cartasini yaratish" })
    @Post("create")
    async createCustomerCard(@Body() createCustomerCardDto: CreateCustomerCardDto): Promise<CustomerCard> {
        return this.customerCardService.createCustomerCard(createCustomerCardDto);
    }

    @ApiOperation({ summary: "Foydalanuvchi cartasini ko'rish" })
    @Get('find-all')
    async getAllCustomerCard() {
        return this.customerCardService.getAllCustomerCard();
    }

    @ApiOperation({ summary: "Foydalanuvchi cartasini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneCustomerCard(@Param("id") id: string): Promise<CustomerCard> {
        return this.customerCardService.getOneCustomerCard(id);
    }

    @ApiOperation({ summary: "Foydalanuvchi cartasini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneCustomerCard(@Param("id") id: string) {
        return this.customerCardService.delOneCustomerCard(id);
    }

    @ApiOperation({ summary: "Foydalanuvchi cartasini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateCustomerCard(@Param('id') id: string, @Body() updateCustomerCardDto: UpdateCustomerCardDto) {
        return this.customerCardService.updateCustomerCard(id, updateCustomerCardDto);
    }
}
