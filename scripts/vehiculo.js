"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(marca, modelo, color, ruedas) {
        // Asociaciones
        this.propietario = null;
        this.reportes = [];
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }
    add__propietario(propietario) {
        if (propietario) {
            this.propietario = propietario;
        }
    }
    add__reportes(accidente) {
        if (accidente) {
            this.reportes.push(accidente);
        }
    }
}
exports.Vehiculo = Vehiculo;
