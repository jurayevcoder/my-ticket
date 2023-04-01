import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenueTypeAttr {
    name: string;
}

@Table({tableName: 'VenueType'})
export class VenueType extends Model<VenueType, VenueTypeAttr>{
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

    @HasMany(() => Venue)
    venue: Venue;
}
