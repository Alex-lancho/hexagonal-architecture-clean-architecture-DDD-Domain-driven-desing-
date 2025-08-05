import { StudentRepository } from "src/modules/student/domain/repositories/student.repository";


export class CreateStudentUseCase {
  constructor(private repo: StudentRepository) {}

  async execute(data: any) {
    return this.repo.createWithCourses(data);
  }
}
