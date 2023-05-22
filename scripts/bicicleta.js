"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicicleta = void 0;
const vehiculo_1 = require("./vehiculo");
class Bicicleta extends vehiculo_1.Vehiculo {
    constructor(marca, modelo, color, ruedas, tipo, luces) {
        super(marca, modelo, color, ruedas);
        this.tipo = tipo;
        this.luces = luces;
    }
}
exports.Bicicleta = Bicicleta;
