import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateHumanCategoryDto {
    @ApiProperty({example: "girls dance", description: "Yig'in nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "15", description: "Yig'inga kirish uchun eng kichik yosh"})
    @IsInt()
    @IsNotEmpty()
    start_age: number;

    @ApiProperty({example: "25", description: "Yig'inga kirish uchun eng katta yosh"})
    @IsInt()
    @IsNotEmpty()
    finish_age: number;

    @ApiProperty({example: "girl", description: "Yig'inga kirish jinsi"})
    @IsString()
    @IsNotEmpty()
    gender: string
}
