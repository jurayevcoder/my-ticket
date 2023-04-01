import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDistrictDto {
    @ApiProperty({example: "Chilonzor tumani", description: "Tuman nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;
}
