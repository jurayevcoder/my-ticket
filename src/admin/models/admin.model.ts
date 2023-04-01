import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttr {
    email: string
    hashed_password: string;
}

@Table({tableName: 'admin'})
export class Admin extends Model<Admin, AdminAttr> {
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
    email: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_admin: boolean;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;
}
