import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDTO } from '../../interfaces/dto/create-student.dto';
import { StudentPrismaRepository } from '../persistence/student.prisma.repository';
import { CreateStudentUseCase } from '../../application/use-cases/create-estudiante.usecase';
import { UpdateStudentDTO } from '../../interfaces/dto/update-student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly repo: StudentPrismaRepository) {}

  // GET /students
  @Get()
  async findAll() {
    return this.repo.findAll();
  }

  // GET /students/:id
  @Get(':id')
  async findById(@Param('id') id: string) {
    const student = await this.repo.findById(id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  // POST /students
  @Post()
  async create(@Body() dto: CreateStudentDTO) {
    const useCase = new CreateStudentUseCase(this.repo);
    return useCase.execute(dto);
  }

  // POST /students/with-courses
  @Post('with-courses')
  async createWithCourses(@Body() dto: CreateStudentDTO) {
    return this.repo.createWithCourses(dto);
  }

  // PUT /students/:id
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateStudentDTO) {
    return this.repo.update(id, dto);
  }

  // DELETE /students/:id
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.repo.delete(id);
    return { message: 'Student deleted' };
  }
}
