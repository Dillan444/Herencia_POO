"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorizado = void 0;
const vehiculo_1 = require("./vehiculo");
class Motorizado extends vehiculo_1.Vehiculo {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima) {
        super(marca, modelo, color, ruedas);
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }
}
exports.Motorizado = Motorizado;
