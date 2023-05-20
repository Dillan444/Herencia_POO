import { Motorizado } from "./motorizado";

export class Carro extends Motorizado {
  asientos: number

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number, asientos: number) {
    super(marca, modelo, color, ruedas, placa, velocidadMaxima)
    this.asientos = asientos
  }
}