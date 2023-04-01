import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './models/seat.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}

    async createSeat(createSeatDto: CreateSeatDto): Promise<Seat> {
        const seat = await this.seatRepo.create(createSeatDto);
        return seat;
    }

    async getAllSeat(){
        const seaties = await this.seatRepo.findAll({include: {all: true}});
        return seaties;
    }

    async getOneSeat(id: string): Promise<Seat>{
        const seat = await this.seatRepo.findByPk(id);
        return seat;
    }

    async delOneSeat(id: string){
        return this.seatRepo.destroy({where: {id}});
    }

    async updateSeat(id: string, updateSeatDto: UpdateSeatDto){
        const seat = await this.seatRepo.update(updateSeatDto,{
            where: {id},
        })
    }
}
