import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';
import { DeliveryMethod } from './models/delivery_method.model';

@Injectable()
export class DeliveryMethodService {
  constructor(@InjectModel(DeliveryMethod) private deliveryMethodRepo: typeof DeliveryMethod) {}

    async createDeliveryMethod(createDeliveryMethodDto: CreateDeliveryMethodDto): Promise<DeliveryMethod> {
        const deliveryMethod = await this.deliveryMethodRepo.create(createDeliveryMethodDto);
        return deliveryMethod;
    }

    async getAllDeliveryMethod(){
        const deliveryMethodies = await this.deliveryMethodRepo.findAll({include: {all: true}});
        return deliveryMethodies;
    }

    async getOneDeliveryMethod(id: string): Promise<DeliveryMethod>{
        const deliveryMethod = await this.deliveryMethodRepo.findByPk(id);
        return deliveryMethod;
    }

    async delOneDeliveryMethod(id: string){
        return this.deliveryMethodRepo.destroy({where: {id}});
    }

    async updateDeliveryMethod(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto){
        const deliveryMethod = await this.deliveryMethodRepo.update(updateDeliveryMethodDto,{
            where: {id},
        })
    }
}
