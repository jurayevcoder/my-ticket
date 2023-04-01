import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { SeatType } from "../../seat_type/models/seat_type.model";
import { Ticket } from "../../ticket/models/ticket.model";
import { Venue } from "../../venue/models/venue.model";

interface SeatAttr {
    sector: number;
    row_number: number;
    number: number;
    venue_id: number;
    seat_type_id: number
    location_in_schema: string;
}

@Table({ tableName: 'seat' })
export class Seat extends Model<Seat, SeatAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER
    })
    sector: number;

    @Column({
        type: DataType.INTEGER,
    })
    row_number: number;

    @Column({
        type: DataType.INTEGER,
    })
    number: number;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
    })
    venue_id: number;
    @BelongsTo(() => Venue)
    venue: Venue;

    @ForeignKey(() => SeatType)
    @Column({
        type: DataType.INTEGER,
    })
    seat_type_id: number;
    @BelongsTo(() => SeatType)
    seatType: SeatType;
    

    @Column({
        type: DataType.STRING,
    })
    location_in_schema: string;

    @HasMany(() => Ticket)
    ticket: Ticket;
}