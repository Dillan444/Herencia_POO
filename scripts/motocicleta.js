"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motocicleta = void 0;
const motorizado_1 = require("./motorizado");
class Motocicleta extends motorizado_1.Motorizado {
    constructor(marca, modelo, color, ruedas, placa, velocidadMaxima, cilindraje) {
        super(marca, modelo, color, ruedas, placa, velocidadMaxima);
        this.cilindraje = cilindraje;
    }
}
exports.Motocicleta = Motocicleta;
