
# 📚 API de Estudiantes y Cursos – NestJS + Prisma + Arquitectura Hexagonal + DDD

Este proyecto implementa una API REST moderna utilizando **NestJS** y **Prisma ORM (MySQL)** siguiendo los principios de **Domain-Driven Design (DDD)**, **Arquitectura Hexagonal** y **Clean Architecture**.

Permite gestionar estudiantes y sus cursos mediante un diseño limpio, escalable, mantenible y orientado al dominio, ideal para proyectos educativos, empresariales o institucionales.

---

## 🚀 Tecnologías principales

- **NestJS** – Framework para aplicaciones Node.js
- **TypeScript** – Lenguaje fuertemente tipado
- **Prisma ORM** – ORM moderno y robusto para MySQL
- **MySQL** – Base de datos relacional
- **Arquitectura Hexagonal + DDD** – Separación de responsabilidades
- **Class Validator** – Validaciones automáticas de DTOs

---

## 📁 Estructura de Carpetas y Arquitectura

```bash
src/
├── main.ts                         # Punto de entrada de NestJS
├── app.module.ts                  # Módulo raíz global
│
├── config/                         # Configuración global
│   ├── config.module.ts
│   ├── env.config.ts
│   └── prisma/
│       ├── prisma.config.ts
│       ├── prisma.module.ts
│       └── prisma.service.ts
│
├── shared/                           # Núcleo compartido de la app
│   ├── domain/                     # Elementos del dominio genérico
│   │   ├── entities/
│   │   │   └── base.entity.ts
│   │   ├── value-objects/
│   │   │   └── email.vo.ts
│   │   └── interfaces/
│   │       └── repository.interface.ts
│   │
│   ├── application/                # Interfaces y contratos globales
│   │   └── use-case.interface.ts
│   │
│   ├── infrastructure/             # Infraestructura genérica (logger, auth, etc.)
│   │   ├── http/
|   │   ├── logger/
│   │   ├── auth/
│   │
│   └── utils/                      # Utilidades globales
│       ├── interceptors/
│       ├── exceptions/
│       └── validators/
│
├── modules/                        # Módulos del dominio (bounded contexts)
│   ├── student/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   │   └── student.entity.ts
│   │   │   ├── value-objects/
│   │   │   │   └── dni.vo.ts
│   │   │   └── repositories/
│   │   │       └── student.repository.ts
│   │   │
│   │   ├── application/
│   │   │   ├── use-cases/
│   │   │   │   ├── create-estudiante.usecase.ts
│   │   │   │   └── find-estudiante.usecase.ts
│   │   │   └── services/
│   │   │       └── estudiante.service.ts
│   │   │
│   │   ├── infrastructure/
│   │   │   ├── controllers/
│   │   │   │   └── student.controller.ts
│   │   │   └── persistence/
│   │   │       └── student.prisma.repository.ts
│   │   │
│   │   ├── interfaces/             # DTOs y tipos expuestos externamente
│   │   │   └── dto/
│   │   │       └── create-student.dto.ts
│   │   │
│   │   └── student.module.ts
│   │
│   └── course/                      # Otro módulo de dominio
│       ├── domain/
│       ├── application/
│       ├── infrastructure/
│       ├── interfaces/
│       └── course.module.ts
```
🧠 Explicación de cada capa de la arquitectura
Capa	Rol principal
Domain	Define las entidades del negocio (Student, Course), value-objects y contratos
Application	Contiene los casos de uso (CreateStudent, UpdateCourse, etc.)
Infrastructure	Implementa los repositorios (Prisma), controladores HTTP, servicios externos
Interfaces	Define DTOs (validaciones), inputs/outputs de la API
Shared	Contiene utilitarios genéricos (errores, validadores, logs)

Cada módulo tiene su propia estructura vertical siguiendo el patrón de Bounded Context de DDD.

🧩 Modelo de Base de Datos
prisma
```bash

model Estudiante {
  id        String   @id @default(uuid())
  nombre    String
  apellidos String
  dni       String   @unique
  cursos    Curso[]
}

model Curso {
  id           String   @id @default(uuid())
  nombre       String
  creditos     Int
  semestre     Int
  estudiante   Estudiante @relation(fields: [estudianteId], references: [id])
  estudianteId String
}
```
📦 Instalación y configuración

# Clonar el proyecto
```bash
git clone https://github.com/Alex-lancho/hexagonal-architecture-clean-architecture-DDD-Domain-driven-desing-.git
cd tu_proyecto

# Instalar dependencias
npm install

# Copiar archivo .env
cp .env.example .env

# Configurar conexión a base de datos en .env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/dbprueba"

# Ejecutar migración inicial
npx prisma migrate dev --name init

# Generar cliente Prisma
npx prisma generate

# Iniciar servidor de desarrollo
npm run start:dev

```
🔄 Endpoints disponibles
Estudiantes
Método	Ruta	Descripción
## GET	/students	Listar todos los estudiantes con sus cursos
## GET	/students/:id	Obtener un estudiante por ID
## POST	/students	Crear estudiante sin cursos
## POST	/students/with-courses	Crear estudiante junto con cursos
## PUT	/students/:id	Actualizar estudiante por ID
## DELETE	/students/:id	Eliminar estudiante

Cursos
Método	Ruta	Descripción
GET	/courses	Listar todos los cursos
GET	/courses/:id	Obtener curso por ID
POST	/courses	Crear curso
PUT	/courses/:id	Actualizar curso por ID
DELETE	/courses/:id	Eliminar curso
