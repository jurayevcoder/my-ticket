import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './models/country.model';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepo: typeof Country) {}

    async createCountry(createCountryDto: CreateCountryDto): Promise<Country> {
        const country = await this.countryRepo.create(createCountryDto);
        return country;
    }

    async getAllCountry(){
        const countryies = await this.countryRepo.findAll({include: {all: true}});
        return countryies;
    }

    async getOneCountry(id: string): Promise<Country>{
        const country = await this.countryRepo.findByPk(id);
        return country;
    }

    async delOneCountry(id: string){
        return this.countryRepo.destroy({where: {id}});
    }

    async updateCountry(id: string, updateCountryDto: UpdateCountryDto){
        const country = await this.countryRepo.update(updateCountryDto,{
            where: {id},
        })
    }
}
