import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { CustomerAddress } from './models/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress) private customerAddressRepo: typeof CustomerAddress) {}

    async createCustomerAddress(createCustomerAddressDto: CreateCustomerAddressDto): Promise<CustomerAddress> {
        const customerAddress = await this.customerAddressRepo.create(createCustomerAddressDto);
        return customerAddress;
    }

    async getAllCustomerAddress(){
        const customerAddressies = await this.customerAddressRepo.findAll({include: {all: true}});
        return customerAddressies;
    }

    async getOneCustomerAddress(id: string): Promise<CustomerAddress>{
        const customerAddress = await this.customerAddressRepo.findByPk(id);
        return customerAddress;
    }

    async delOneCustomerAddress(id: string){
        return this.customerAddressRepo.destroy({where: {id}});
    }

    async updateCustomerAddress(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto){
        const customerAddress = await this.customerAddressRepo.update(updateCustomerAddressDto,{
            where: {id},
        })
    }
}
