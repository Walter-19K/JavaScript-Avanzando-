import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cuenta.component.html'
})
export class CuentaComponent {
  usuario: Usuario | null;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.obtenerUsuario();
  }
}
