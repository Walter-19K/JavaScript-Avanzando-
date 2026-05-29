import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  usuario: Usuario | null = null;
  productos: Producto[] = [];

  constructor(private authService: AuthService, private productoService: ProductoService) {}

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuario();
    this.productoService.listarProductos().subscribe({
      next: (productos) => this.productos = productos,
      error: () => this.productos = []
    });
  }

  get valorInventario(): number {
    return this.productos.reduce((total, producto) => total + producto.precio * producto.stock, 0);
  }

  get stockTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.stock, 0);
  }
}
