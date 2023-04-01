import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";


export class CreateTicketDto {
    @ApiProperty({ example: "1", description: "Yig'ining ID si" })
    @IsInt()
    @IsNotEmpty()
    event_id: number

    @ApiProperty({ example: "1", description: "O'rindiq joyi ID si" })
    @IsInt()
    @IsNotEmpty()
    seat_id: number;

    @ApiProperty({ example: "20000", description: "Chipta narxi" })
    @IsInt()
    @IsNotEmpty()
    price: number;

    @ApiProperty({ example: "20", description: "Chipta chegirmasi foizi" })
    @IsInt()
    @IsNotEmpty()
    service_fee: number;

    @ApiProperty({ example: "1", description: "Holatning ID si" })
    @IsInt()
    @IsNotEmpty()
    status_id: number;

    @ApiProperty({ example: "1", description: "Chipta tipi ID si" })
    @IsInt()
    @IsNotEmpty()
    ticket_type_id: number;
}
