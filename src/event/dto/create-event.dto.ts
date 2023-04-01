import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {
    @ApiProperty({example: "Navroz", description: "Yig'in nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "https://rasm", description: "Yig'in rasmi"})
    @IsString()
    @IsNotEmpty()
    photo: string;

    @ApiProperty({example: "2023-04-01", description: "Yig'in boshlanish sanasi"})
    @IsDate()
    @IsNotEmpty()
    start_date: Date;

    @ApiProperty({example: "10:00", description: "Yig'in boshlanish vaqti"})
    @IsString()
    @IsNotEmpty()
    start_time: string;

    @ApiProperty({example: "2023-04-05", description: "Yig'in tugash sanasi"})
    @IsDate()
    @IsNotEmpty()
    finish_date: Date;

    @ApiProperty({example: "20:00", description: "Yig'in tugash vaqti"})
    @IsString()
    @IsNotEmpty()
    finish_time: string;

    @ApiProperty({example: "bilmadim", description: "Yig'inga oid qo'shimcha malumotalar"})
    @IsString()
    @IsNotEmpty()
    info?: string
}
