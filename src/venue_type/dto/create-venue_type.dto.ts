import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({example: "Kino", description: "Joylarda bo'ladigan yig'inlar tipi"})
    @IsNotEmpty()
    @IsString()
    name: string;
}
