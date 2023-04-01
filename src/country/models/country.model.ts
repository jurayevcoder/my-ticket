import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Region } from "../../region/models/region.model";

interface CountryAttr {
    name: string;
}

@Table({tableName: 'country'})
export class Country extends Model<Country, CountryAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @HasMany(() => Region)
    region: Region;

    @HasMany(() => CustomerAddress)
    customerAddress: CustomerAddress;

}