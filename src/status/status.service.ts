import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './models/status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status) {}

    async createStatus(createStatusDto: CreateStatusDto): Promise<Status> {
        const status = await this.statusRepo.create(createStatusDto);
        return status;
    }

    async getAllStatus(){
        const statusies = await this.statusRepo.findAll({include: {all: true}});
        return statusies;
    }

    async getOneStatus(id: string): Promise<Status>{
        const status = await this.statusRepo.findByPk(id);
        return status;
    }

    async delOneStatus(id: string){
        return this.statusRepo.destroy({where: {id}});
    }

    async updateStatus(id: string, updateStatusDto: UpdateStatusDto){
        const status = await this.statusRepo.update(updateStatusDto,{
            where: {id},
        })
    }
}
