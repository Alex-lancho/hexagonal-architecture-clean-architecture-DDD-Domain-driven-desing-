import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCourseDTO } from 'src/modules/course/interfaces/dto/create-course.dto';


export class CreateStudentDTO {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  dni: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCourseDTO)
  cursos: CreateCourseDTO[];
}
