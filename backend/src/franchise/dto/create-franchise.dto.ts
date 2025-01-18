import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFranchiseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  seo_title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  seo_description: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  introtext: string;

  @ApiProperty()
  @IsString()
  alias: string;
  content: string;

  @ApiProperty()
  @IsBoolean()
  published: boolean;

  @ApiProperty()
  @IsBoolean()
  popular: boolean;

  @ApiProperty()
  @IsBoolean()
  new: boolean;

  @ApiProperty()
  image: string;

  @ApiProperty()
  icon: string;

  created_at: Date;
  updated_at: Date;
}
