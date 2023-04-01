import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region) {}

    async createRegion(createRegionDto: CreateRegionDto): Promise<Region> {
        const region = await this.regionRepo.create(createRegionDto);
        return region;
    }

    async getAllRegion(){
        const regionies = await this.regionRepo.findAll({include: {all: true}});
        return regionies;
    }

    async getOneRegion(id: string): Promise<Region>{
        const region = await this.regionRepo.findByPk(id);
        return region;
    }

    async delOneRegion(id: string){
        return this.regionRepo.destroy({where: {id}});
    }

    async updateRegion(id: string, updateRegionDto: UpdateRegionDto){
        const region = await this.regionRepo.update(updateRegionDto,{
            where: {id},
        })
    }
}
