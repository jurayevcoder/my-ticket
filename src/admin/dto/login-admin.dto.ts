import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginAdminDto {
    @ApiProperty({example: "admin@gmail.com", description: "Admin emaili"})
    @IsEmail()
    email: string;

    @ApiProperty({example: "qwerty", description: "Admin paroli"})
    @IsString()
    password: string;

}