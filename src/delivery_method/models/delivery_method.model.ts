import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface DeliveryMethodAttr {
    name: string
}

@Table({tableName: 'delivery_method'})
export class DeliveryMethod extends Model<DeliveryMethod, DeliveryMethodAttr> {
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
