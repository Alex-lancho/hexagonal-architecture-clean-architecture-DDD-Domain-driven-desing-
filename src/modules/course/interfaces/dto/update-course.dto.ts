import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateCourseDTO {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  creditos?: number;

  @IsOptional()
  @IsNumber()
  semestre?: number;
}
