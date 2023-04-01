import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './models/language.model';

@Injectable()
export class LanguageService {
  constructor(@InjectModel(Language) private languageRepo: typeof Language) {}

    async createLanguage(createLanguageDto: CreateLanguageDto): Promise<Language> {
        const language = await this.languageRepo.create(createLanguageDto);
        return language;
    }

    async getAllLanguage(){
        const languageies = await this.languageRepo.findAll({include: {all: true}});
        return languageies;
    }

    async getOneLanguage(id: string): Promise<Language>{
        const language = await this.languageRepo.findByPk(id);
        return language;
    }

    async delOneLanguage(id: string){
        return this.languageRepo.destroy({where: {id}});
    }

    async updateLanguage(id: string, updateLanguageDto: UpdateLanguageDto){
        const language = await this.languageRepo.update(updateLanguageDto,{
            where: {id},
        })
    }
}
