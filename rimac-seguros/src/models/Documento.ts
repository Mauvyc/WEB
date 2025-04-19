// Modelo de Documento adjunto
export interface Documento {
  id: string;
  url: string;
  tipo: string; // Ej: 'foto', 'pdf', 'doc', etc.
  nombre: string;
}
