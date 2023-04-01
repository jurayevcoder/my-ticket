import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateVenueDto {
    @ApiProperty({example:"Bunyotkor stadium" ,description: "Joy nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "Toshkent shahar, Chilonzor tumani 10 mavze",description: "Joy manzili"})
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty({example: "xarita",description: "Joy joylashgan joyi"})
    @IsString()
    @IsNotEmpty()
    location?: string;

    @ApiProperty({example: "https://bunyotkorstadium.uz",description: "Joy sayti"})
    @IsString()
    @IsNotEmpty()
    site?: string;

    @ApiProperty({example: "+998901234567",description: "Joy telefon raqami"})
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({example: "xarita",description: "Joy ichki xaritasi"})
    @IsString()
    @IsNotEmpty()
    schema: string;
}
