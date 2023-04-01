import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './models/venue.model';

@Injectable()
export class VenueService {
    constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}

    async createVenue(createVenueDto: CreateVenueDto): Promise<Venue> {
        const venue = await this.venueRepo.create(createVenueDto);
        return venue;
    }

    async getAllVenue(){
        const venueies = await this.venueRepo.findAll({include: {all: true}});
        return venueies;
    }

    async getOneVenue(id: string): Promise<Venue>{
        const venue = await this.venueRepo.findByPk(id);
        return venue;
    }

    async delOneVenue(id: string){
        return this.venueRepo.destroy({where: {id}});
    }

    async updateVenue(id: string, updateVenueDto: UpdateVenueDto){
        const venue = await this.venueRepo.update(updateVenueDto,{
            where: {id},
        })
    }
}