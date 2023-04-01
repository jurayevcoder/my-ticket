import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterAdminDto {
    @ApiProperty({example: "admin@gmail.com", description: "Admin emaili"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "qwerty", description: "Admin paroli"})
    @IsString()
    @MinLength(6, {})
    password: string;

    @ApiProperty({example: "qwerty", description: "Admin tekshiruv paroli"})
    @IsString()
    confirm_password?: string;
}
