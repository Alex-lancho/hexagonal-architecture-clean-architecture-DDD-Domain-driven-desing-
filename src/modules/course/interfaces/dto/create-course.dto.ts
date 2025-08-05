import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCourseDTO {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  creditos: number;

  @IsNotEmpty()
  @IsNumber()
  semestre: number;

  @IsNotEmpty()
  @IsString()
  estudianteId: string;
}
