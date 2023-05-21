import { Persona } from "./persona"
import { Accidente } from "./accidente"

export abstract class Vehiculo {
  marca: string
  modelo: string
  color: string
  ruedas: number

  // Asociaciones
  propietario: Persona | null = null
  reportes: Accidente[] = []

  constructor(marca: string, modelo: string, color: string, ruedas: number) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.ruedas = ruedas
  }

  add__propietario(propietario: Persona){
    if(propietario){
      this.propietario = propietario
    }
  }

  add__reportes(accidente: Accidente){
    if(accidente){
      this.reportes.push(accidente)
    }
  }
}