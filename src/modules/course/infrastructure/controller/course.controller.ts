import {Body,Controller,Delete,Get,Param,Post,Put,NotFoundException,} from '@nestjs/common';
import { CoursePrismaRepository } from '../persistence/course.prisma.repository';
import { CreateCourseDTO } from '../../interfaces/dto/create-course.dto';
import { UpdateCourseDTO } from '../../interfaces/dto/update-course.dto';
import { CreateCourseUseCase } from '../../application/use-cases/create-course.usecase';
import { UpdateCourseUseCase } from '../../application/use-cases/update-course.usecase';
import { DeleteCourseUseCase } from '../../application/use-cases/delete-course.usecase';
  
  @Controller('courses')
  export class CourseController {
    constructor(private readonly repo: CoursePrismaRepository) {}
  
    @Post()
    async create(@Body() dto: CreateCourseDTO) {
      const useCase = new CreateCourseUseCase(this.repo);
      return useCase.execute(dto);
    }
  
    @Get()
    async findAll() {
      return this.repo.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const course = await this.repo.findById(id);
      if (!course) throw new NotFoundException('Course not found');
      return course;
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateCourseDTO) {
      const useCase = new UpdateCourseUseCase(this.repo);
      return useCase.execute(id, dto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      const useCase = new DeleteCourseUseCase(this.repo);
      return useCase.execute(id);
    }
  }
  