import { CourseRepository } from '../../domain/repositories/course.repository';

export class DeleteCourseUseCase {
  constructor(private repo: CourseRepository) {}

  async execute(id: string) {
    return this.repo.delete(id);
  }
}
