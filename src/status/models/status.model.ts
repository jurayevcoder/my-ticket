import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";
import { Cart } from "../../cart/models/cart.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface StatusAttr {
    name: string;
}

@Table({tableName: 'status'})
export class Status extends Model<Status, StatusAttr>{
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

    @HasMany(() => Ticket)  
    ticket: Ticket;

    @HasMany(() => Cart)
    cart: Cart;

    @HasMany(() => Booking)
    booking: Booking;
}