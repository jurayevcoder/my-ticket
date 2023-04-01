import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSeatTypeDto {
    @ApiProperty({example: "VIP", description: "O'rindiq joyini tipi"})
    @IsString()
    @IsNotEmpty()
    name: string;
}
