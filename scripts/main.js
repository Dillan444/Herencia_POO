"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const licenciaConducion_1 = require("./licenciaConducion");
const accidente_1 = require("./accidente");
const persona_1 = require("./persona");
const bicicleta_1 = require("./bicicleta");
const carro_1 = require("./carro");
// Personas e involucrados
const persona1 = new persona_1.Persona("Jose", "1234567", "3084953948", 21);
const persona2 = new persona_1.Persona("Edwardo", "4738493", "3098372734", 22);
// Vehiculos
const bicicleta1 = new bicicleta_1.Bicicleta("gw", "Todo terreno", "Blanca", 2, "urbana", false);
const carro1 = new carro_1.Carro("Toyota", "Deportivo", "Negro", 4, "FJD452", 230, 2);
// Licencia y su propierario
const licencia1 = new licenciaConducion_1.LicenciaConduccion("A2", new Date("2018-03-16"), new Date("2020-03-16"), persona2);
// Acidente
const accidente1 = new accidente_1.Accidente(new Date("2018-03-17"), "Ciclista choco con un vehiculo", 2);
// Agregando a una Persona una licencia
persona2.add__licencia(licencia1);
// Agregando los invlocrados en el accidente
accidente1.add__involucrado(carro1);
accidente1.add__involucrado(bicicleta1);
// Generando los reportes a los vehiculos
carro1.add__reportes(accidente1);
bicicleta1.add__reportes(accidente1);
// Agregando propietarios a cada vehiculo
carro1.add__propietario(persona2);
bicicleta1.add__propietario(persona1);
console.log(accidente1);
