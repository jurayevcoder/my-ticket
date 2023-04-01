import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerCardDto {
    @ApiProperty({example: "1", description: "Foydalanuvchi ID si"})
    @IsInt()
    @IsNotEmpty()
    customer_id: number;

    @ApiProperty({example: "uzcart", description: "Foydalanuvchi cartasi nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "+998907456123", description: "Foydalanuvchi cartasiga ulangann telefon raqam"})
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({example: "8600125454789632", description: "Foydalanuvchi cartasi raqami"})
    @IsString()
    @IsNotEmpty()
    number: string;

    @ApiProperty({example: "2027", description: "Foydalanuvchi cartasining mudati tugash yili"})
    @IsString()
    @IsNotEmpty()
    year: string;

    @ApiProperty({example: "05", description: "Foydalanuvchi cartasining mudati tugash oyi"})
    @IsString()
    @IsNotEmpty()
    month: string;

    @ApiProperty({example: "true", description: "Foydalanuvchi cartasi asosiy carta yoki yoqligi"})
    @IsBoolean()
    @IsNotEmpty()
    is_main: boolean;
}
