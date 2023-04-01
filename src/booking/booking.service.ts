import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}

    async createBooking(createBookingDto: CreateBookingDto): Promise<Booking> {
        const booking = await this.bookingRepo.create(createBookingDto);
        return booking;
    }

    async getAllBooking(){
        const bookingies = await this.bookingRepo.findAll({include: {all: true}});
        return bookingies;
    }

    async getOneBooking(id: string): Promise<Booking>{
        const booking = await this.bookingRepo.findByPk(id);
        return booking;
    }

    async delOneBooking(id: string){
        return this.bookingRepo.destroy({where: {id}});
    }

    async updateBooking(id: string, updateBookingDto: UpdateBookingDto){
        const booking = await this.bookingRepo.update(updateBookingDto,{
            where: {id},
        })
    }
}
