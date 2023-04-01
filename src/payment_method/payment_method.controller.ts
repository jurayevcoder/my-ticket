import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './models/payment_method.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("To'lov turlari")
@Controller('payment-method')
export class PaymentMethodController {
    constructor(private readonly paymentMethodService: PaymentMethodService) { }

    @ApiOperation({ summary: "To'lov turlarini yaratish" })
    @Post("create")
    async createPaymentMethod(@Body() createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod> {
        return this.paymentMethodService.createPaymentMethod(createPaymentMethodDto);
    }

    @ApiOperation({ summary: "To'lov turlarini ko'rish " })
    @Get('find-all')
    async getAllPaymentMethod() {
        return this.paymentMethodService.getAllPaymentMethod();
    }

    @ApiOperation({summary: "To'lov turlarini ID si bo'yicha ko'rish"})
    @Get('find/:id')
    async getOnePaymentMethod(@Param("id") id: string): Promise<PaymentMethod> {
        return this.paymentMethodService.getOnePaymentMethod(id);
    }

    @ApiOperation({summary: "To'lov turlarini ID si bo'yicha o'chirish"})
    @Delete('delete/:id')
    async delOnePaymentMethod(@Param("id") id: string) {
        return this.paymentMethodService.delOnePaymentMethod(id);
    }

    @ApiOperation({summary: "To'lov turlarini ID si bo'yicha o'zgartirish"})
    @Put("update/:id")
    async updatePaymentMethod(@Param('id') id: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
        return this.paymentMethodService.updatePaymentMethod(id, updatePaymentMethodDto);
    }
}
