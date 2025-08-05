export class Dni {
    constructor(public readonly value: string) {
      if (!/^\d{8}$/.test(value)) {
        throw new Error('DNI inválido');
      }
    }
  }
  