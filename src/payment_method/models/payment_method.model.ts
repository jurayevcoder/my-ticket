import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface PaymentMethodAttr {
    name: string;
}

@Table({tableName: 'payment_method'})
export class PaymentMethod extends Model<PaymentMethod, PaymentMethodAttr> {
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

    @HasMany(() => Booking)
    booking: Booking;
}
