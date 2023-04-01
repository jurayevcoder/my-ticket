import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { CustomerCard } from './models/customer_card.model';

@Injectable()
export class CustomerCardService {
  constructor(@InjectModel(CustomerCard) private customerCardRepo: typeof CustomerCard) {}

    async createCustomerCard(createCustomerCardDto: CreateCustomerCardDto): Promise<CustomerCard> {
        const customerCard = await this.customerCardRepo.create(createCustomerCardDto);
        return customerCard;
    }

    async getAllCustomerCard(){
        const customerCardies = await this.customerCardRepo.findAll({include: {all: true}});
        return customerCardies;
    }

    async getOneCustomerCard(id: string): Promise<CustomerCard>{
        const customerCard = await this.customerCardRepo.findByPk(id);
        return customerCard;
    }

    async delOneCustomerCard(id: string){
        return this.customerCardRepo.destroy({where: {id}});
    }

    async updateCustomerCard(id: string, updateCustomerCardDto: UpdateCustomerCardDto){
        const customerCard = await this.customerCardRepo.update(updateCustomerCardDto,{
            where: {id},
        })
    }
}
