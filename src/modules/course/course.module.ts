import { Module } from '@nestjs/common';
import { CoursePrismaRepository } from './infrastructure/persistence/course.prisma.repository';
import { CourseController } from './infrastructure/controller/course.controller';

@Module({
  controllers: [CourseController],
  providers: [CoursePrismaRepository],
})
export class CourseModule {}
