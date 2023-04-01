import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './models/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType) private venueTypeRepo: typeof VenueType) {}

    async createVenueType(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType> {
        const venueType = await this.venueTypeRepo.create(createVenueTypeDto);
        return venueType;
    }

    async getAllVenueType(){
        const venueTypeies = await this.venueTypeRepo.findAll({include: {all: true}});
        return venueTypeies;
    }

    async getOneVenueType(id: string): Promise<VenueType>{
        const venueType = await this.venueTypeRepo.findByPk(id);
        return venueType;
    }

    async delOneVenueType(id: string){
        return this.venueTypeRepo.destroy({where: {id}});
    }

    async updateVenueType(id: string, updateVenueTypeDto: UpdateVenueTypeDto){
        const venueType = await this.venueTypeRepo.update(updateVenueTypeDto,{
            where: {id},
        })
    }
}
