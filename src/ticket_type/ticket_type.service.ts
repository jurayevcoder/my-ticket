import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './models/ticket_type.model';

@Injectable()
export class TicketTypeService {
  constructor(@InjectModel(TicketType) private ticketTypeRepo: typeof TicketType) {}

    async createTicketType(createTicketTypeDto: CreateTicketTypeDto): Promise<TicketType> {
        const ticketType = await this.ticketTypeRepo.create(createTicketTypeDto);
        return ticketType;
    }

    async getAllTicketType(){
        const ticketTypeies = await this.ticketTypeRepo.findAll({include: {all: true}});
        return ticketTypeies;
    }

    async getOneTicketType(id: string): Promise<TicketType>{
        const ticketType = await this.ticketTypeRepo.findByPk(id);
        return ticketType;
    }

    async delOneTicketType(id: string){
        return this.ticketTypeRepo.destroy({where: {id}});
    }

    async updateTicketType(id: string, updateTicketTypeDto: UpdateTicketTypeDto){
        const ticketType = await this.ticketTypeRepo.update(updateTicketTypeDto,{
            where: {id},
        })
    }
}
