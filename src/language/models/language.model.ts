import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Event } from "../../event/models/event.model";

interface LanguageAttr {
    name: string;
}

@Table({tableName: 'language'})
export class Language extends Model<Language, LanguageAttr>{
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

    @HasMany(() => Event)
    event: Event;

    @HasMany(() => Customer)
    customer: Customer;

}