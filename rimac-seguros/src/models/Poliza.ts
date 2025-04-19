// Modelo de Poliza
export interface Poliza {
  id: string;
  numero: string;
  fechaInicio: Date;
  fechaFin: Date;
  cobertura: string;
  estado: 'Vigente' | 'Vencida' | 'Pendiente';
  aseguradoId: string;
}
