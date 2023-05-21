import { LicenciaConduccion } from "./licenciaConducion"
import { Vehiculo } from "./vehiculo"

export class Persona {
  nombre: string
  cedula: string
  telefono: string
  edad: number

  // Asociaciones
  licencia: LicenciaConduccion | null = null
  vehiculos: Vehiculo[] = []

  constructor(nombre: string, cedula: string, telefono: string, edad: number) {
    this.nombre = nombre
    this.cedula = cedula
    this.telefono = telefono
    this.edad = edad
  }

  add__licencia(licencia: LicenciaConduccion){
    if(licencia){
      this.licencia = licencia
    }
  }

  add__vehiculo(vehiculo: Vehiculo){
    if(vehiculo){
      this.vehiculos.push(vehiculo)
    }
  }
}