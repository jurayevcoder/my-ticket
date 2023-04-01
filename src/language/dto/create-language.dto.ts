import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({example: "uzbek", description: "Tilning nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;
}
