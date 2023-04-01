import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface DiscountCouponAttr {
    name: string;
    number: number;
}

@Table({ tableName: 'DiscountCoupon' })
export class DiscountCoupon extends Model<DiscountCoupon, DiscountCouponAttr> {
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
        type: DataType.INTEGER,
    })
    number: number;

    @HasMany(() => Booking)
    booking: Booking;

}
