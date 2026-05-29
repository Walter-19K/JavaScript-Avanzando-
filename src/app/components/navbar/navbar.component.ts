import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  usuario: Usuario | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.usuarioActual$.subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
