import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './models/event_type.model';

@Injectable()
export class EventTypeService {
    constructor(@InjectModel(EventType) private eventTypeRepo: typeof EventType) { }

    async createEventType(createEventTypeDto: CreateEventTypeDto): Promise<EventType> {
        const eventType = await this.eventTypeRepo.create(createEventTypeDto);
        return eventType;
    }

    async getAllEventType() {
        const eventTypeies = await this.eventTypeRepo.findAll({include: {all: true}});
        return eventTypeies;
    }

    async getOneEventType(id: string): Promise<EventType> {
        const eventType = await this.eventTypeRepo.findByPk(id);
        return eventType;
    }

    async delOneEventType(id: string) {
        return this.eventTypeRepo.destroy({ where: { id } });
    }

    async updateEventType(id: string, updateEventTypeDto: UpdateEventTypeDto) {
        const eventType = await this.eventTypeRepo.update(updateEventTypeDto, {
            where: { id },
        })
    }
}
