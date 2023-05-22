"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, cedula, telefono, edad) {
        // Asociaciones
        this.licencia = null;
        this.vehiculos = [];
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
    }
    add__licencia(licencia) {
        if (licencia) {
            this.licencia = licencia;
        }
    }
    add__vehiculo(vehiculo) {
        if (vehiculo) {
            this.vehiculos.push(vehiculo);
        }
    }
}
exports.Persona = Persona;
