export abstract class Vehiculo {
  marca: string
  modelo: string
  color: string
  ruedas: number

  constructor(marca: string, modelo: string, color: string, ruedas: number) {
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.ruedas = ruedas
  }
}