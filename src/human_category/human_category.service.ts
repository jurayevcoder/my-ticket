import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './models/human_category.model';

@Injectable()
export class HumanCategoryService {
  constructor(@InjectModel(HumanCategory) private hcRepo: typeof HumanCategory) {}

    async createHumanCategory(createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory> {
        const hc = await this.hcRepo.create(createHumanCategoryDto);
        return hc;
    }

    async getAllHumanCategory(){
        const hcies = await this.hcRepo.findAll({include: {all: true}});
        return hcies;
    }

    async getOneHumanCategory(id: string): Promise<HumanCategory>{
        const hc = await this.hcRepo.findByPk(id);
        return hc;
    }

    async delOneHumanCategory(id: string){
        return this.hcRepo.destroy({where: {id}});
    }

    async updateHumanCategory(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto){
        const hc = await this.hcRepo.update(updateHumanCategoryDto,{
            where: {id},
        })
    }
}
