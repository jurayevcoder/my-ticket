import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { District } from '../../district/models/district.model';
import { Event } from '../../event/models/event.model';
import { Region } from '../../region/models/region.model';
import { Seat } from '../../seat/models/seat.model';
import { VenuePhoto } from '../../venue_photo/models/venue_photo.model';
import { VenueType } from '../../venue_type/models/venue_type.model';


interface VenueAttr {
    name: string;
    address: string;
    location?: string;
    site?: string;
    phone: string;
    venue_type_id: number;
    schema: string;
    region_id: number;
    district_id: number;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, VenueAttr> {
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

    @Column({
        type: DataType.STRING,
    })
    address: string;

    @Column({
        type: DataType.STRING,
    })
    location: string;

    @Column({
        type: DataType.STRING,
    })
    site: string;

    @Column({
        type: DataType.STRING,
    })
    phone: string;

    @ForeignKey(() => VenueType)
    @Column({
        type: DataType.INTEGER,
    })
    venue_type_id: number;
    @BelongsTo(() => VenueType)
    venueType: VenueType;
    

    @Column({
        type: DataType.STRING,
    })
    schema: string;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
    })
    region_id: number;
    @BelongsTo(() => Region)
    region: Region;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
    })
    district_id: number;
    @BelongsTo(() => District)
    district: District;

    @HasMany(() => VenuePhoto)
    venuePhoto: VenuePhoto;

    @HasMany(() => Event)
    event: Event;

    @HasMany(() => Seat)
    seat: Seat;
}