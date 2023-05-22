import { LicenciaConduccion } from "./licenciaConducion";
import { Accidente } from "./accidente";
import { Persona } from "./persona";

import { Vehiculo } from "./vehiculo";
import { Bicicleta } from "./bicicleta";
import { Motorizado } from "./motorizado";
import { Motocicleta } from "./motocicleta";
import { Carro } from "./carro";

// Personas e involucrados
const persona1 = new Persona("Jose", "1234567", "3084953948", 21)
const persona2 = new Persona("Edwardo", "4738493", "3098372734", 22)

// Vehiculos
const bicicleta1 = new Bicicleta("gw", "Todo terreno", "Blanca", 2, "urbana", false)
const carro1 = new Carro("Toyota", "Deportivo", "Negro", 4, "FJD452", 230, 2)

// Licencia y su propierario
const licencia1 = new LicenciaConduccion("A2", new Date("2018-03-16"), new Date("2020-03-16"), persona2)

// Acidente
const accidente1 = new Accidente(new Date("2018-03-17"), "Ciclista choco con un vehiculo", 2)


// Agregando a una Persona una licencia
persona2.add__licencia(licencia1)

// Agregando los invlocrados en el accidente
accidente1.add__involucrado(carro1)
accidente1.add__involucrado(bicicleta1)

// Generando los reportes a los vehiculos
carro1.add__reportes(accidente1)
bicicleta1.add__reportes(accidente1)

// Agregando propietarios a cada vehiculo
carro1.add__propietario(persona2)
bicicleta1.add__propietario(persona1)


console.log(accidente1)