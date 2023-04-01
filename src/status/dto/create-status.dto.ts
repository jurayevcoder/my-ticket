import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateStatusDto {
    @ApiProperty({example: "active", description: "Holatni nomi"})
    @IsString()
    @IsNotEmpty()
    name: string
}
