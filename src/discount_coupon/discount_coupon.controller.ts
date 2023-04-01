import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DiscountCouponService } from './discount_coupon.service';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { DiscountCoupon } from './models/discount_coupon.model';

@ApiTags("Chegirmalar")
@Controller('discount-coupon')
export class DiscountCouponController {
    constructor(private readonly discountCouponService: DiscountCouponService) { }

    @ApiOperation({ summary: "Chegirmani yaratish" })
    @Post("create")
    async createDiscountCoupon(@Body() createDiscountCouponDto: CreateDiscountCouponDto): Promise<DiscountCoupon> {
        return this.discountCouponService.createDiscountCoupon(createDiscountCouponDto);
    }

    @ApiOperation({ summary: "Chegirmani ko'rish" })
    @Get('find-all')
    async getAllDiscountCoupon() {
        return this.discountCouponService.getAllDiscountCoupon();
    }

    @ApiOperation({ summary: "Chegirmani ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneDiscountCoupon(@Param("id") id: string): Promise<DiscountCoupon> {
        return this.discountCouponService.getOneDiscountCoupon(id);
    }

    @ApiOperation({ summary: "Chegirmani ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneDiscountCoupon(@Param("id") id: string) {
        return this.discountCouponService.delOneDiscountCoupon(id);
    }

    @ApiOperation({ summary: "Chegirmani ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateDiscountCoupon(@Param('id') id: string, @Body() updateDiscountCouponDto: UpdateDiscountCouponDto) {
        return this.discountCouponService.updateDiscountCoupon(id, updateDiscountCouponDto);
    }
}
