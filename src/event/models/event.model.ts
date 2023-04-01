import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { EventType } from '../../event_type/models/event_type.model';
import { HumanCategory } from '../../human_category/models/human_category.model';
import { Language } from '../../language/models/language.model';
import { Ticket } from '../../ticket/models/ticket.model';
import { Venue } from '../../venue/models/venue.model';

interface EventAttr {
    name: string;
    photo: string;
    start_date: Date;
    start_time: string;
    finish_date: Date;
    finish_time: string;
    info?: string
    event_type_id: number;
    human_category_id: number;
    venue_id: number;
    lang_id: number;
}

@Table({ tableName: 'event' })
export class Event extends Model<Event, EventAttr> {
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
    photo: string;

    @Column({
        type: DataType.DATE,
    })
    start_date: Date;

    @Column({
        type: DataType.STRING,
    })
    start_time: string;

    @Column({
        type: DataType.DATE,
    })
    finish_date: Date;

    @Column({
        type: DataType.STRING,
    })
    finish_time: string;

    @Column({
        type: DataType.STRING,
    })
    info: string;

    @ForeignKey(() => EventType)
    @Column({
        type: DataType.INTEGER,
    })
    event_type_id: number;
    @BelongsTo(() => EventType)
    eventType: EventType;
    

    @ForeignKey(() => HumanCategory)
    @Column({
        type: DataType.INTEGER,
    })
    human_category_id: number;
    @BelongsTo(() => HumanCategory)
    humanCategoryon: HumanCategory;

    @ForeignKey(() => Venue)
    @Column({
        type: DataType.INTEGER,
    })
    venue_id: number;
    @BelongsTo(() => Venue)
    venue: Venue;

    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
    })
    lang_id: number;
    @BelongsTo(() => Language)
    language: Language;


    @HasMany(() => Ticket)
    ticket: Ticket;
}