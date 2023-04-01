import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './models/ticket.model';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket) {}

    async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
        const ticket = await this.ticketRepo.create(createTicketDto);
        return ticket;
    }

    async getAllTicket(){
        const ticketies = await this.ticketRepo.findAll({include: {all: true}});
        return ticketies;
    }

    async getOneTicket(id: string): Promise<Ticket>{
        const ticket = await this.ticketRepo.findByPk(id);
        return ticket;
    }

    async delOneTicket(id: string){
        return this.ticketRepo.destroy({where: {id}});
    }

    async updateTicket(id: string, updateTicketDto: UpdateTicketDto){
        const ticket = await this.ticketRepo.update(updateTicketDto,{
            where: {id},
        })
    }
}
