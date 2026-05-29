import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ofertas.component.html'
})
export class OfertasComponent {
  ofertas = [
    { titulo: '10% de descuento', detalle: 'En compras mayores a S/ 1000' },
    { titulo: 'Envio gratis', detalle: 'Para laptops y monitores seleccionados' },
    { titulo: 'Combo gamer', detalle: 'Teclado mecanico + mouse inalambrico' }
  ];
}
