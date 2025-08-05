import { CourseRepository } from '../../domain/repositories/course.repository';

export class UpdateCourseUseCase {
  constructor(private repo: CourseRepository) {}

  async execute(id: string, data: any) {
    return this.repo.update(id, data);
  }
}
