export class Student {
    constructor(
      public readonly id: string,
      public nombre: string,
      public apellidos: string,
      public dni: string,
      public cursos?:any[]
    ) {}
}
  