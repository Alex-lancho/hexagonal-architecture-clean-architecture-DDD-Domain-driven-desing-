import { Course } from '../entities/course.entity';

export abstract class CourseRepository {
  abstract create(data: any): Promise<Course>;
  abstract findAll(): Promise<Course[]>;
  abstract findById(id: string): Promise<Course | null>;
  abstract update(id: string, data: any): Promise<Course>;
  abstract delete(id: string): Promise<void>;
}
