import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateCartDto {
    @ApiProperty({example: "1", description: "Chipta ID si"})
    @IsInt()
    @IsNotEmpty()
    ticket_id: number;

    @ApiProperty({example: "1", description: "Foydalanuvchi ID si"})
    @IsInt()
    @IsNotEmpty()
    customer_id: number;


    @ApiProperty({example: "1", description: "Holat ID si"})
    @IsInt()
    @IsNotEmpty()
    status_id: number;
}
