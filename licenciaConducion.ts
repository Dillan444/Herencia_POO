export class LicenciaConduccion{
  tipoLicencia: string
  fechaExpedicion: Date
  vigencia: Date

  constructor(tipoLicencia: string, fechaExpedicion: Date, vigencia: Date) {
    this.tipoLicencia = tipoLicencia
    this.fechaExpedicion = fechaExpedicion
    this.vigencia = vigencia
  }
}