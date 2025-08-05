import { Module } from '@nestjs/common';
import { StudentController } from './infrastructure/controllers/student.controller';
import { StudentPrismaRepository } from './infrastructure/persistence/student.prisma.repository';

@Module({
  controllers: [StudentController],
  providers: [StudentPrismaRepository],
})
export class StudentModule {}
