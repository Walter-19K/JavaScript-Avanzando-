import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  contacto = { nombre: '', correo: '', mensaje: '' };
  enviado = false;

  enviar(): void {
    this.enviado = true;
    this.contacto = { nombre: '', correo: '', mensaje: '' };
  }
}
