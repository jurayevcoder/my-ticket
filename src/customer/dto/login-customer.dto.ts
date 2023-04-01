import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginCustomerDto {
    @ApiProperty({example: "user@gmail.com", description: "Foydalanuvchis emaili"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "qwerty", description: "Foydalanuvchis paroli"})
    @IsString()
    @IsNotEmpty()
    password: string;
}