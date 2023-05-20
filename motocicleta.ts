import { Motorizado } from "./motorizado";

export class Motocicleta extends Motorizado {
  cilindraje: number

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number, cilindraje: number) {
    super(marca, modelo, color, ruedas, placa, velocidadMaxima)
    this.cilindraje = cilindraje
  }
}
