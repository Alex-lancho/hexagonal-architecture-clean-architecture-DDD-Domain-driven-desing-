import { Student } from '../entities/student.entity';

export abstract class StudentRepository {
  abstract createWithCourses(data: any): Promise<Student>;
  abstract findAll(): Promise<Student[]>;
  abstract findById(id: string): Promise<Student | null>;
  abstract update(id: string, data: any): Promise<Student>;
  abstract delete(id: string): Promise<void>;
}
