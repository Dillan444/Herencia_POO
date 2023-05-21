import { Vehiculo } from "./vehiculo"

export class Accidente {
  fecha: Date
  descripcion: string
  severidad: number

  // Asociaciones
  involucrados: Vehiculo[] = []

  constructor(fecha: Date, descripcion: string, severidad: number){
    this.fecha = fecha
    this.descripcion = descripcion
    this.severidad = severidad
  }

  add__involucrado(involucrado: Vehiculo){
    if(involucrado){
      this.involucrados.push(involucrado)
    }
  }
}