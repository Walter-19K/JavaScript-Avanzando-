import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credenciales = { correo: '', password: '' };
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion(): void {
    const loginCorrecto = this.authService.login(this.credenciales.correo, this.credenciales.password);

    if (!loginCorrecto) {
      this.error = 'Ingresa un correo valido y una clave de minimo 6 caracteres.';
      return;
    }

    this.error = '';
    this.router.navigate(['/dashboard']);
  }
}
