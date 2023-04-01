import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBookingDto {
    @ApiProperty({example: "1", description: "Chipta cartasi ID si"})
    @IsInt()
    @IsNotEmpty()
    cart_id: number

    @ApiProperty({example: "1", description: "Tolov turi ID si"})
    @IsInt()
    @IsNotEmpty()
    payment_method_id: number;

    @ApiProperty({example: "1", description: "Chipta olish turi ID si"})
    @IsInt()
    @IsNotEmpty()
    delivery_method_id: number;

    @ApiProperty({example: "1", description: "Chegirmalar ID si"})
    @IsInt()
    @IsNotEmpty()
    discount_coupon_id: number;

    @ApiProperty({example: "1", description: "Holat ID si"})
    @IsInt()
    @IsNotEmpty()
    status_id: number;
}
