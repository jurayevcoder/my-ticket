import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District) {}

    async createDistrict(createDistrictDto: CreateDistrictDto): Promise<District> {
        const district = await this.districtRepo.create(createDistrictDto);
        return district;
    }

    async getAllDistrict(){
        const districties = await this.districtRepo.findAll({include: {all: true}});
        return districties;
    }

    async getOneDistrict(id: string): Promise<District>{
        const district = await this.districtRepo.findByPk(id);
        return district;
    }

    async delOneDistrict(id: string){
        return this.districtRepo.destroy({where: {id}});
    }

    async updateDistrict(id: string, updateDistrictDto: UpdateDistrictDto){
        const district = await this.districtRepo.update(updateDistrictDto,{
            where: {id},
        })
    }
}
