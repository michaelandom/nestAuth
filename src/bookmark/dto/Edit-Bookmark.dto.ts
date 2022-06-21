import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditUserDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsString()
  @IsOptional()
  link?: string;
  @IsNumber()
  @IsOptional()
  userId?: number;
}
