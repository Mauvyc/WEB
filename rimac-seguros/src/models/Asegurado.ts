// Modelo de Asegurado (Cliente)
export interface Asegurado {
  id: string;
  nombreCompleto: string;
  dni: string;
  correo: string;
  direccion: string;
  telefono: string;
  polizas: Poliza[];
}

import { Poliza } from './Poliza';
