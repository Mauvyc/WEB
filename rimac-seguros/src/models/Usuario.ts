// Modelo de Usuario (Personal, Admin)
export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  password: string;
  rol: 'admin' | 'personal';
}
