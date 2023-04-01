import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerAddressDto {
    @ApiProperty({example: "1", description: "Foydalanuvchi ID si"})
    @IsInt()
    @IsNotEmpty()
    customer_id: number;

    @ApiProperty({example: "Davlat", description: "Foydalanuvchi nomi"})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({example: "1", description: "Foydalanuvchi Mamlakat ID si"})
    @IsInt()
    @IsNotEmpty()
    country_id: number;

    @ApiProperty({example: "1", description: "Foydalanuvchi Viloyat ID si"})
    @IsInt()
    @IsNotEmpty()
    region_id: number;

    @ApiProperty({example: "1", description: "Foydalanuvchi Tuman ID si"})
    @IsInt()
    @IsNotEmpty()
    district_id: number;

    @ApiProperty({example: "Bobur", description: "Foydalanuvchi ko'chasi nomi"})
    @IsString()
    @IsNotEmpty()
    street: string;

    @ApiProperty({example: "54 uy", description: "Foydalanuvchi uy raqami"})
    @IsString()
    @IsNotEmpty()
    house: string;

    @ApiProperty({example: "kvartira", description: "Foydalanuvchi uyini turi nomi"})
    @IsString()
    @IsNotEmpty()
    flat: string;

    @ApiProperty({example: "xarita", description: "Foydalanuvchi manzilini xaritasi"})
    @IsString()
    @IsNotEmpty()
    location: string;

    @ApiProperty({example: "12", description: "Foydalanuvchi pochta indexsi"})
    @IsString()
    @IsNotEmpty()
    post_index: string;

    @ApiProperty({example: "bilmadim", description: "Foydalanuvchi manziliga oid qo'shimcha ma'lumot"})
    @IsString()
    @IsNotEmpty()
    info: string;
}
