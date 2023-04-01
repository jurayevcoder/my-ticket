import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './models/cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}

    async createCart(createCartDto: CreateCartDto): Promise<Cart> {
        const cart = await this.cartRepo.create(createCartDto);
        return cart;
    }

    async getAllCart(){
        const carties = await this.cartRepo.findAll({include: {all: true}});
        return carties;
    }

    async getOneCart(id: string): Promise<Cart>{
        const cart = await this.cartRepo.findByPk(id);
        return cart;
    }

    async delOneCart(id: string){
        return this.cartRepo.destroy({where: {id}});
    }

    async updateCart(id: string, updateCartDto: UpdateCartDto){
        const cart = await this.cartRepo.update(updateCartDto,{
            where: {id},
        })
    }
}
