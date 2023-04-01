import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto) {}

    async createVenuePhoto(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto> {
        const venuePhoto = await this.venuePhotoRepo.create(createVenuePhotoDto);
        return venuePhoto;
    }

    async getAllVenuePhoto(){
        const venuePhotoies = await this.venuePhotoRepo.findAll({include: {all: true}});
        return venuePhotoies;
    }

    async getOneVenuePhoto(id: string): Promise<VenuePhoto>{
        const venuePhoto = await this.venuePhotoRepo.findByPk(id);
        return venuePhoto;
    }

    async delOneVenuePhoto(id: string){
        return this.venuePhotoRepo.destroy({where: {id}});
    }

    async updateVenuePhoto(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto){
        const venuePhoto = await this.venuePhotoRepo.update(updateVenuePhotoDto,{
            where: {id},
        })
        
    }
}
