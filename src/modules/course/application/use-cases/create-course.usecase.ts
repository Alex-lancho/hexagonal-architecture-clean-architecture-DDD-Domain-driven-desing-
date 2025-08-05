import { CourseRepository } from '../../domain/repositories/course.repository';

export class CreateCourseUseCase {
  constructor(private repo: CourseRepository) {}

  async execute(data: any) {
    return this.repo.create(data);
  }
}
