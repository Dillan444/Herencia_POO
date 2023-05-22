"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accidente = void 0;
class Accidente {
    constructor(fecha, descripcion, severidad) {
        // Asociaciones
        this.involucrados = [];
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.severidad = severidad;
    }
    add__involucrado(involucrado) {
        if (involucrado) {
            this.involucrados.push(involucrado);
        }
    }
}
exports.Accidente = Accidente;
