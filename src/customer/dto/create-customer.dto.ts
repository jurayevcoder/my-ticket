import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateCustomerDto {
    @ApiProperty({example: "user", description: "Foydalanuvchi ismi"})
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({example: "userov", description: "Foydalanuvchi familyasi"})
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({example: "+998918889888", description: "Foydalanuvchi telefon raqami"})
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({example: "user@gmail.com", description: "Foydalanuvchi emaili"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "2001-01-02", description: "Foydalanuvchi tug'ilgan sanasi"})
    @IsDate()
    @IsNotEmpty()
    birthday: Date;

    @ApiProperty({example: "male", description: "Foydalanuvchi jinsi"})
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({example: "qwerty", description: "Foydalanuvchi paroli"})
    @IsString()
    @IsNotEmpty()
    @MinLength(6, {})
    password: string;

    @ApiProperty({example: "qwerty", description: "Foydalanuvchi tekshiruv paroli"})
    @IsString()
    @IsNotEmpty()
    confirm_password: string;

    @ApiProperty({example: "1", description: "Foydalanuvchi tili ID si"})
    @IsInt()
    @IsNotEmpty()
    lang_id: number;
}
