// Modelo de Presupuesto
export interface Presupuesto {
  id: string;
  siniestroId: string;
  monto: number;
  estado: 'Pendiente' | 'Aprobado' | 'Rechazado';
}
