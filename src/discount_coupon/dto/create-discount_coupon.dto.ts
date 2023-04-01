import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountCouponDto {
    @ApiProperty({example: "navroz", description: "Chegirma nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "50", description: "Chegirma foizi"})
    @IsInt()
    @IsNotEmpty()
    number: number;
}
