import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { DiscountCoupon } from "../../discount_coupon/models/discount_coupon.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";
import { Status } from "../../status/models/status.model";

interface BookingAttr {
    cart_id: number
    createdAt: string;
    finishedAt: string;
    payment_method_id: number;
    delivery_method_id: number;
    discount_coupon_id: number;
    status_id: number;
}

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking, BookingAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
    })
    cart_id: number;
    @BelongsTo(() => Cart)
    cart: Cart;


    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    finishedAt: Date;


    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.INTEGER,
    })
    payment_method_id: number;
    @BelongsTo(() => PaymentMethod)
    paymentMethod: PaymentMethod;
    

    @ForeignKey(() => DeliveryMethod)
    @Column({
        type: DataType.INTEGER,
    })
    delivery_method_id: number;
    @BelongsTo(() => DeliveryMethod)
    deliveryMethod: DeliveryMethod;

    @ForeignKey(() => DiscountCoupon)
    @Column({
        type: DataType.INTEGER,
    })
    discount_coupon_id: number;
    @BelongsTo(() => DiscountCoupon)
    discountCoupon: DiscountCoupon;

    @ForeignKey(() => Status)
    @Column({
        type: DataType.INTEGER,
    })
    status_id: number;
    @BelongsTo(() => Status)
    status: Status;
}
