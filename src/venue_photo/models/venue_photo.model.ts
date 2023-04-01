import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";

interface VenuePhotoAttr {
    url: string; 
}

@Table({tableName: 'VenuePhoto'})
export class VenuePhoto extends Model<VenuePhoto, VenuePhotoAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER
    })
    venue_id: number;
    @BelongsTo(() => Venue)
    venue: Venue;
    
    @Column({
        type: DataType.STRING
    })
    url: string;
}
