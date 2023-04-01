import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEventTypeDto {
    @ApiProperty({example: "Sport", description: "Yig'ining tipi nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "1", description: "Yig'in tipi ID si"})
    @IsInt()
    @IsNotEmpty()
    parent_event_type_id?: number;
}
