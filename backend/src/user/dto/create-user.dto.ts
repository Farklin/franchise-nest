import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength, MaxLength, IsEmail, IsPhoneNumber } from "class-validator";
import { Exclude } from "class-transformer";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    login: string;

    @ApiProperty()
    @IsPhoneNumber("RU")
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
  
    password: string;

}
