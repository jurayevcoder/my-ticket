import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeatDto {
    @ApiProperty({example: "2", description: "O'rindiq joyi joylashgan sector raqami"})
    @IsInt()
    @IsNotEmpty()
    sector: number;

    @ApiProperty({example: "10", description: "O'rindiq joyi joylashgan qator raqami"})
    @IsInt()
    @IsNotEmpty()
    row_number: number;

    @ApiProperty({example: "43", description: "O'rindiq raqami"})
    @IsInt()
    @IsNotEmpty()
    number: number;

    @ApiProperty({example: "schema", description: "O'rindiq joyi joylashgan joyni sxemasi"})
    @IsInt()
    @IsNotEmpty()
    location_in_schema: string;
}
