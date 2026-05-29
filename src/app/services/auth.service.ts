import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const STORAGE_KEY = 'technogaming_usuario';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarioSubject = new BehaviorSubject<Usuario | null>(this.obtenerUsuario());
  usuarioActual$ = this.usuarioSubject.asObservable();

  login(correo: string, password: string): boolean {
    if (!correo.includes('@') || password.trim().length < 6) {
      return false;
    }

    const usuario: Usuario = {
      nombre: correo.split('@')[0],
      correo,
      fechaLogin: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuario));
    this.usuarioSubject.next(usuario);
    return true;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.usuarioSubject.next(null);
  }

  estaAutenticado(): boolean {
    return this.obtenerUsuario() !== null;
  }

  obtenerUsuario(): Usuario | null {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as Usuario;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }
}
