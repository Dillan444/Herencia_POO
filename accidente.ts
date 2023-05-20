export class Accidente {
  fecha: Date
  descripcion: string
  severidad: number

  constructor(fecha: Date, descripcion: string, severidad: number){
    this.fecha = fecha
    this.descripcion = descripcion
    this.severidad = severidad
  }
}