import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cartaporte-form',
  templateUrl: './cartaporte-form.component.html',
  styleUrls: ['./cartaporte-form.component.scss']
})
export class CartaporteFormComponent {
  mostrarFormulario = true; // Inicialmente mostramos el formulario
  mostrarPlantilla = false;
  cartaPorteForm: FormGroup;
  datosGuardados: any = null;

  constructor(private fb: FormBuilder) {
    this.cartaPorteForm = this.fb.group({
      carta_porte: ['', Validators.required],
      fecha: ['', Validators.required],
      lugar: ['', Validators.required],
      dtrio: ['', Validators.required],
      rfc: ['', Validators.required],
      domicilio1: ['', Validators.required],
      cantidad: ['', Validators.required],
      tipo_vehiculo: ['', Validators.required],
      id_contenedor: ['', Validators.required],
      kilos: ['', Validators.required],
      operador: ['', Validators.required],
      placas: ['', Validators.required],
      eco: ['', Validators.required],
      tel_operador: ['', Validators.required],
      tipo_envase: ['Caja', Validators.required],
      contenido: ['Descripción de la mercancía', Validators.required],
      valor_declarado: [1000, Validators.required],
      importe: [1000, Validators.required],
      iva: [160, Validators.required],
      subtotal: [1160, Validators.required],
      retencion: [46.40, Validators.required],
      total: [1113.60, Validators.required],
      importe_letra: ['MIL CIENTO TRECE PESOS 60/100 M.N.', Validators.required]
    });
  }

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
    this.mostrarPlantilla = false;
  }

  guardar() {
    if (this.cartaPorteForm.valid) {
      this.datosGuardados = this.cartaPorteForm.value;
      this.mostrarFormulario = false;
      this.mostrarPlantilla = true;
    } else {
      alert('⚠️ Completa todos los campos obligatorios');
      this.cartaPorteForm.markAllAsTouched();
    }
  }
}
