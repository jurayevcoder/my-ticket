import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";
import { CustomerCard } from "../../customer_card/models/customer_card.model";
import { Language } from "../../language/models/language.model";

interface CustomerAttr {
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birthday: Date;
    gender: string;
    lang_id: number;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.DATE,
    })
    birthday: Date;

    @Column({
        type: DataType.STRING,
    })
    gender: string;

    @ForeignKey(() => Language)
    @Column({
        type: DataType.INTEGER,
    })
    lang_id: number;
    @BelongsTo(() => Language)
    language: Language;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @HasMany(() => Cart)
    cart: Cart;

    @HasMany(() => CustomerAddress)
    customerAddress: CustomerAddress;

    @HasMany(() => CustomerCard)
    CustomerCard: CustomerCard;
}
