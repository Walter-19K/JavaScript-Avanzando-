import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';

interface ItemCarrito extends Producto {
  cantidad: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  carrito: ItemCarrito[] = [];
  busqueda = '';
  categoriaSeleccionada = 'Todas';
  cargando = true;
  error = '';
  fechaConsulta = new Date();

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo conectar con JSON Server. Ejecuta npm run json-server.';
        this.cargando = false;
      }
    });
  }

  get categorias(): string[] {
    return ['Todas', ...new Set(this.productos.map((producto) => producto.categoria))];
  }

  get productosFiltrados(): Producto[] {
    return this.productos.filter((producto) => {
      const coincideBusqueda = producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
      const coincideCategoria = this.categoriaSeleccionada === 'Todas' || producto.categoria === this.categoriaSeleccionada;
      return coincideBusqueda && coincideCategoria;
    });
  }

  agregarAlCarrito(producto: Producto): void {
    const item = this.carrito.find((productoCarrito) => productoCarrito.id === producto.id);
    if (item) {
      if (item.cantidad < producto.stock) {
        item.cantidad++;
      }
      return;
    }

    this.carrito.push({ ...producto, cantidad: 1 });
  }

  eliminarDelCarrito(id: number): void {
    this.carrito = this.carrito.filter((item) => item.id !== id);
  }

  get subtotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  get descuento(): number {
    return this.subtotal > 1000 ? this.subtotal * 0.1 : 0;
  }

  get total(): number {
    return this.subtotal - this.descuento;
  }

  finalizarCompra(): void {
    alert(`Compra registrada. Total: S/ ${this.total.toFixed(2)}`);
    this.carrito = [];
  }

  estiloStock(producto: Producto): Record<string, string> {
    return {
      color: producto.stock <= 5 ? '#dc3545' : '#198754',
      'font-weight': '700'
    };
  }
}
