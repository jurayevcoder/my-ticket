import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeliveryMethodService } from './delivery_method.service';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { DeliveryMethod } from './models/delivery_method.model';

@ApiTags("Chiptani olish turi")
@Controller('delivery-method')
export class DeliveryMethodController {
    constructor(private readonly deliveryMethodService: DeliveryMethodService) { }

    @ApiOperation({ summary: "Chiptani olish turlarini yaratish" })
    @Post("create")
    async createDeliveryMethod(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto): Promise<DeliveryMethod> {
        return this.deliveryMethodService.createDeliveryMethod(createDeliveryMethodDto);
    }

    @ApiOperation({ summary: "Chiptani olish turlarini ko'rish" })
    @Get('find-all')
    async getAllDeliveryMethod() {
        return this.deliveryMethodService.getAllDeliveryMethod();
    }

    @ApiOperation({ summary: "Chiptani olish turlarini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneDeliveryMethod(@Param("id") id: string): Promise<DeliveryMethod> {
        return this.deliveryMethodService.getOneDeliveryMethod(id);
    }

    @ApiOperation({ summary: "Chiptani olish turlarini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneDeliveryMethod(@Param("id") id: string) {
        return this.deliveryMethodService.delOneDeliveryMethod(id);
    }

    @ApiOperation({ summary: "Chiptani olish turlarini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateDeliveryMethod(@Param('id') id: string, @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
        return this.deliveryMethodService.updateDeliveryMethod(id, updateDeliveryMethodDto);
    }
}
