import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @ApiProperty({example: "yetkazib kelish", description: "Chiptani olish turli"})
    @IsString()
    @IsNotEmpty()
    name: string;
}
