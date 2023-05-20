import { Vehiculo } from "./vehiculo";

export abstract class Motorizado extends Vehiculo {
  placa: string
  velocidadMaxima: number

  constructor(marca: string, modelo: string, color: string, ruedas: number, placa: string, velocidadMaxima: number) {
    super(marca, modelo, color, ruedas)
    this.placa = placa
    this.velocidadMaxima = velocidadMaxima
  }
}