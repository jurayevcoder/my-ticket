import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Country } from "../../country/models/country.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { District } from "../../district/models/district.model";
import { Venue } from "../../venue/models/venue.model";

interface RegionAttr {
    country_id: number;
    name: string;
}

@Table({tableName: 'region'})
export class Region extends Model<Region, RegionAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER,
    })
    country_id: number;
    @BelongsTo(() => Country)
    country: Country;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @HasMany(() => Venue)
    venue: Venue;

    @HasMany(() => CustomerAddress)
    customerAddress: CustomerAddress;

    @HasMany(() => District)
    district: District;
}