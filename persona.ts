import { LicenciaConduccion } from "./licenciaConducion"

export class Persona {
  nombre: string
  cedula: string
  telefono: string
  edad: number
  licenciaConduccion: LicenciaConduccion

  constructor(nombre: string, cedula: string, telefono: string, edad: number, licenciaConduccion: LicenciaConduccion) {
    this.nombre = nombre
    this.cedula = cedula
    this.telefono = telefono
    this.edad = edad
    this.licenciaConduccion = licenciaConduccion
  }
}