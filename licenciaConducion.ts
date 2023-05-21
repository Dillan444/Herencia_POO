import { Persona } from "./persona"

export class LicenciaConduccion{
  tipoLicencia: string
  fechaExpedicion: Date
  vigencia: Date

  // Asociaciones
  propietario: Persona

  constructor(tipoLicencia: string, fechaExpedicion: Date, vigencia: Date, propietario: Persona) {
    this.tipoLicencia = tipoLicencia
    this.fechaExpedicion = fechaExpedicion
    this.vigencia = vigencia
    this.propietario = propietario
  }
}