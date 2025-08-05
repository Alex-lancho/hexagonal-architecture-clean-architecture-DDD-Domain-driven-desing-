import { Injectable } from '@nestjs/common';
import { CourseRepository } from '../../domain/repositories/course.repository';
import { Course } from '../../domain/entities/course.entity';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class CoursePrismaRepository implements CourseRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<Course> {
    const created = await this.prisma.curso.create({ data });
    return new Course(created.id, created.nombre, created.creditos, created.semestre, created.estudianteId);
  }

  async findAll(): Promise<Course[]> {
    const list = await this.prisma.curso.findMany();
    return list.map(c => new Course(c.id, c.nombre, c.creditos, c.semestre, c.estudianteId));
  }

  async findById(id: string): Promise<Course | null> {
    const c = await this.prisma.curso.findUnique({ where: { id } });
    if (!c) return null;
    return new Course(c.id, c.nombre, c.creditos, c.semestre, c.estudianteId);
  }

  async update(id: string, data: any): Promise<Course> {
    const updated = await this.prisma.curso.update({ where: { id }, data });
    return new Course(updated.id, updated.nombre, updated.creditos, updated.semestre, updated.estudianteId);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.curso.delete({ where: { id } });
  }
}
