import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './models/cart.model';


@ApiTags('Chipta cartalari')
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @ApiOperation({ summary: "Chipta cartasini yaratish" })
    @Post("create")
    async createCart(@Body() createCartDto: CreateCartDto): Promise<Cart> {
        return this.cartService.createCart(createCartDto);
    }

    @ApiOperation({ summary: "Chipta cartasini ko'rish" })
    @Get('find-all')
    async getAllCart() {
        return this.cartService.getAllCart();
    }

    @ApiOperation({ summary: "Chipta cartasini ID si bo'yicha ko'rish" })
    @Get('find/:id')
    async getOneCart(@Param("id") id: string): Promise<Cart> {
        return this.cartService.getOneCart(id);
    }

    @ApiOperation({ summary: "Chipta cartasini ID si bo'yicha o'chirish" })
    @Delete('delete/:id')
    async delOneCart(@Param("id") id: string) {
        return this.cartService.delOneCart(id);
    }

    @ApiOperation({ summary: "Chipta cartasini ID si bo'yicha o'zgartirish" })
    @Put("update/:id")
    async updateCart(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
        return this.cartService.updateCart(id, updateCartDto);
    }
}
