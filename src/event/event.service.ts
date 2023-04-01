import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './models/event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventRepo: typeof Event) {}

    async createEvent(createEventDto: CreateEventDto): Promise<Event> {
        const event = await this.eventRepo.create(createEventDto);
        return event;
    }

    async getAllEvent(){
        const eventies = await this.eventRepo.findAll({include: {all: true}});
        return eventies;
    }

    async getOneEvent(id: string): Promise<Event>{
        const event = await this.eventRepo.findByPk(id);
        return event;
    }

    async delOneEvent(id: string){
        return this.eventRepo.destroy({where: {id}});
    }

    async updateEvent(id: string, updateEventDto: UpdateEventDto){
        const event = await this.eventRepo.update(updateEventDto,{
            where: {id},
        })
    }
}
