export class Course {
    constructor(
      public readonly id: string,
      public nombre: string,
      public creditos: number,
      public semestre: number,
      public estudianteId: string
    ) {}
  }
  