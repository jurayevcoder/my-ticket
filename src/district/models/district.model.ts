import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { Region } from "../../region/models/region.model";
import { Venue } from "../../venue/models/venue.model";

interface DistrictAttr {
    region_id: number;
    name: string;
}

@Table({tableName: 'district'})
export class District extends Model<District, DistrictAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
    })
    region_id: number;
    @BelongsTo(() => Region)
    region: Region;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @HasMany(() => Venue)
    venue: Venue;

    @HasMany(() => CustomerAddress)
    customerAddress: CustomerAddress;

}