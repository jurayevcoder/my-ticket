import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Ticket } from "../../ticket/models/ticket.model";

interface TicketAttr {
    name: string;
    color?: string
}


@Table({tableName: "ticket_type"})
export class TicketType extends Model<TicketType, TicketAttr>{
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
    color: string;

    @HasMany(() => Ticket)
    ticket: Ticket;
    
}

