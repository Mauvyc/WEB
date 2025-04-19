// Modelo de Indemnización
export interface Indemnizacion {
  id: string;
  siniestroId: string;
  monto: number;
  estado: 'Pendiente' | 'Pagada';
  fechaPago?: Date;
}
