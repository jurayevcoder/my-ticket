import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketTypeDto {
    @ApiProperty({example: "elektron", description: "Chipta nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "sariq", description: "Chipta rangi"})
    @IsString()
    @IsNotEmpty()
    color?: string;
}
