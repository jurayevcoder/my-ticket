import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './models/seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType) {}

    async createSeatType(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType> {
        const seatType = await this.seatTypeRepo.create(createSeatTypeDto);
        return seatType;
    }

    async getAllSeatType(){
        const seatTypeies = await this.seatTypeRepo.findAll({include: {all: true}});
        return seatTypeies;
    }

    async getOneSeatType(id: string): Promise<SeatType>{
        const seatType = await this.seatTypeRepo.findByPk(id);
        return seatType;
    }

    async delOneSeatType(id: string){
        return this.seatTypeRepo.destroy({where: {id}});
    }

    async updateSeatType(id: string, updateSeatTypeDto: UpdateSeatTypeDto){
        const seatType = await this.seatTypeRepo.update(updateSeatTypeDto,{
            where: {id},
        })
    }
}
