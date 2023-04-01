import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { CustomerAddress } from './models/customer_address.model';

@ApiTags("Foydalanuvshi Manzili")
@Controller('customer-address')
export class CustomerAddressController {
    constructor(private readonly customerAddressService: CustomerAddressService) { }

    @ApiOperation({ summary: "Foydalanuvchi manzilini yaratish" })
    @Post("create")
    async createCustomerAddress(@Body() createCustomerAddressDto: CreateCustomerAddressDto): Promise<CustomerAddress> {
        return this.customerAddressService.createCustomerAddress(createCustomerAddressDto);
    }

    @ApiOperation({ summary: "Foydalanuvchi manzilini ko'rish" })
    @Get('find-all')
    async getAllCustomerAddress() {
        return this.customerAddressService.getAllCustomerAddress();
    }

    @ApiOperation({ summary: "Foydalanuvchi manzilini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneCustomerAddress(@Param("id") id: string): Promise<CustomerAddress> {
        return this.customerAddressService.getOneCustomerAddress(id);
    }

    @ApiOperation({ summary: "Foydalanuvchi manzilini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneCustomerAddress(@Param("id") id: string) {
        return this.customerAddressService.delOneCustomerAddress(id);
    }

    @ApiOperation({ summary: "Foydalanuvchi manzilini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateCustomerAddress(@Param('id') id: string, @Body() updateCustomerAddressDto: UpdateCustomerAddressDto) {
        return this.customerAddressService.updateCustomerAddress(id, updateCustomerAddressDto);
    }
}
