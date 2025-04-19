// Modelo de Reclamación
export interface Reclamacion {
  id: string;
  siniestroId: string;
  descripcion: string;
  documentos: Documento[];
  estado: 'Pendiente' | 'Revisada' | 'Aprobada' | 'Rechazada';
}

import { Documento } from './Documento';
