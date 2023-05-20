import { Vehiculo } from "./vehiculo";

export class Bicicleta extends Vehiculo{
  tipo: "urbana" | "deportiva"
  luces: boolean

  constructor(marca: string, modelo: string, color: string, ruedas: number, tipo: "urbana" | "deportiva", luces: boolean) {
    super(marca, modelo, color, ruedas)
    this.tipo = tipo
    this.luces = luces
  }
}