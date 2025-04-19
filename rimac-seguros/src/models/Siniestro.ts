// Modelo de Siniestro
export interface Siniestro {
  id: string;
  fecha: Date;
  tipo: 'Robo' | 'Choque' | 'Daños Menores' | 'Pérdida Total';
  ubicacion: string;
  descripcion: string;
  estado: 'Registrado' | 'En Evaluación' | 'Aprobado' | 'Rechazado' | 'Pagado';
  polizaId: string;
  documentos: Documento[];
}

import { Documento } from './Documento';
