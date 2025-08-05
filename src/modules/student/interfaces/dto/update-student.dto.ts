import { IsOptional, IsString } from 'class-validator';

export class UpdateStudentDTO {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  apellidos?: string;

  @IsOptional()
  @IsString()
  dni?: string;
}
