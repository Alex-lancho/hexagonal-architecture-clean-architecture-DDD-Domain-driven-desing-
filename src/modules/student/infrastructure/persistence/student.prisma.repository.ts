import { Injectable } from '@nestjs/common';
import { StudentRepository } from '../../domain/repositories/student.repository';
import { Student } from '../../domain/entities/student.entity';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Injectable()
export class StudentPrismaRepository implements StudentRepository {
  constructor(private prisma: PrismaService) {}

  async createWithCourses(data: any): Promise<Student> {
    const created = await this.prisma.estudiante.create({
      data: {
        nombre: data.nombre,
        apellidos: data.apellidos,
        dni: data.dni,
        cursos: {
          create: data.cursos,
        },
      },
      include: { cursos: true },
    });
    return new Student(created.id, created.nombre, created.apellidos, created.dni);
  }

  async findAll(): Promise<Student[]> {
    const all = await this.prisma.estudiante.findMany({ include: { cursos: true } });
    return all.map((s) => new Student(s.id, s.nombre, s.apellidos, s.dni, s.cursos));
  }

  async findById(id: string): Promise<Student | null> {
    const student = await this.prisma.estudiante.findUnique({
      where: { id },
      include: { cursos: true },
    });
    if (!student) return null;
    return new Student(student.id, student.nombre, student.apellidos, student.dni);
  }

  async update(id: string, data: any): Promise<Student> {
    const updated = await this.prisma.estudiante.update({
      where: { id },
      data,
    });
    return new Student(updated.id, updated.nombre, updated.apellidos, updated.dni);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.estudiante.delete({ where: { id } });
  }
}
