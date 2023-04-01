import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';
import { DiscountCoupon } from './models/discount_coupon.model';

@Injectable()
export class DiscountCouponService {
  constructor(@InjectModel(DiscountCoupon) private discountCouponRepo: typeof DiscountCoupon) {}

    async createDiscountCoupon(createDiscountCouponDto: CreateDiscountCouponDto): Promise<DiscountCoupon> {
        const discountCoupon = await this.discountCouponRepo.create(createDiscountCouponDto);
        return discountCoupon;
    }

    async getAllDiscountCoupon(){
        const discountCouponies = await this.discountCouponRepo.findAll({include: {all: true}});
        return discountCouponies;
    }

    async getOneDiscountCoupon(id: string): Promise<DiscountCoupon>{
        const discountCoupon = await this.discountCouponRepo.findByPk(id);
        return discountCoupon;
    }

    async delOneDiscountCoupon(id: string){
        return this.discountCouponRepo.destroy({where: {id}});
    }

    async updateDiscountCoupon(id: string, updateDiscountCouponDto: UpdateDiscountCouponDto){
        const discountCoupon = await this.discountCouponRepo.update(updateDiscountCouponDto,{
            where: {id},
        })
    }
}
