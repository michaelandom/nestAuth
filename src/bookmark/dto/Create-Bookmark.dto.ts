import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBookMarkDto {
  @IsString()
  title: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsString()
  link: string;
}
