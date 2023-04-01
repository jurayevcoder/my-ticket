import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Country } from "../../country/models/country.model";
import { Customer } from "../../customer/models/customer.model";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";

interface CustomerAddressAttr {
    customer_id: number;
    name: string;
    country_id: number;
    region_id: number;
    district_id: number;
    street: string;
    house: string;
    flat: string;
    location: string;
    post_index: string;
    info: string;
}

@Table({tableName: 'customer_address'})
export class CustomerAddress extends Model<CustomerAddress, CustomerAddressAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
    })
    customer_id: number;
    @BelongsTo(() => Customer)
    customer: Customer;

    @Column({
        type: DataType.STRING
    })
    name: string;

    @ForeignKey(() => Country)
    @Column({
        type: DataType.INTEGER,
    })
    country_id: number;
    @BelongsTo(() => Country)
    country: Country;

    @ForeignKey(() => Region)
    @Column({
        type: DataType.INTEGER,
    })
    region_id: number;
    @BelongsTo(() => Region)
    region: Region;

    @ForeignKey(() => District)
    @Column({
        type: DataType.INTEGER,
    })
    district_id: number;
    @BelongsTo(() => District)
    district: District;

    @Column({
        type: DataType.STRING,
    })
    street: string;

    @Column({
        type: DataType.STRING,
    })
    house: string;

    @Column({
        type: DataType.STRING,
    })
    flat: string;

    @Column({
        type: DataType.STRING,
    })
    location: string;

    @Column({
        type: DataType.STRING,
    })
    post_index: string;

    @Column({
        type: DataType.STRING,
    })
    info: string;
    
}
