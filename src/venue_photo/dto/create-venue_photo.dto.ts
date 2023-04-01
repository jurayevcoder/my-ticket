import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateVenuePhotoDto {
    @ApiProperty({example: "https://rasm", description: "Foydalanuvxhi rasmi"})
    @IsNotEmpty()
    @IsString()
    url: string;

    @ApiProperty({example: "1", description: "Foydalanuvchi ID si"})
    @IsInt()
    venue_id: number;
}
