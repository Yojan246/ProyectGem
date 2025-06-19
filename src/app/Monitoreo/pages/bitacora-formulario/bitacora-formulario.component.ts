import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-bitacora-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
  ],
  templateUrl: './bitacora-formulario.component.html',
  styleUrls: ['./bitacora-formulario.component.scss']
})
export class BitacoraFormularioComponent implements OnInit {
  maniobraForm!: FormGroup;

  // Listas de datos para selects
  unidades = [
    { id: 1, nombre: 'Unidad 1' },
    { id: 2, nombre: 'Unidad 2' },
    // agrega más según tu necesidad
  ];
  chasisList = [
    { id: 1, nombre: 'Chasis A' },
    { id: 2, nombre: 'Chasis B' },
  ];
  dollyList = [
    { id: 1, nombre: 'Dolly X' },
    { id: 2, nombre: 'Dolly Y' },
  ];
  operadores = [
    { id: 1, nombre: 'Operador 1' },
    { id: 2, nombre: 'Operador 2' },
  ];
  clientes = [
    { id: 1, nombre: 'Cliente A' },
    { id: 2, nombre: 'Cliente B' },
  ];
  terminales = [
    { id: 1, nombre: 'Terminal Norte' },
    { id: 2, nombre: 'Terminal Sur' },
  ];

  ngOnInit() {
    this.maniobraForm = new FormGroup({
      fecha: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required),
      unidad: new FormControl(null, Validators.required),
      chasis: new FormControl(null),       // validación se ajusta según tipo
      chasis1: new FormControl(null),
      chasis2: new FormControl(null),
      dolly: new FormControl(null),
      operador: new FormControl(null, Validators.required),
      cliente: new FormControl(null, Validators.required),
      contenedor: new FormControl('', Validators.required),
      terminal: new FormControl(null, Validators.required),
      peso: new FormControl(null, [Validators.required, Validators.min(0)]),
    });

    // Ajustar validaciones dinámicamente según el tipo de maniobra
    this.maniobraForm.get('tipo')?.valueChanges.subscribe(tipo => {
      if (tipo === 'sencillo') {
        this.maniobraForm.get('chasis')?.setValidators(Validators.required);
        this.maniobraForm.get('chasis1')?.clearValidators();
        this.maniobraForm.get('chasis2')?.clearValidators();
        this.maniobraForm.get('dolly')?.clearValidators();

        this.maniobraForm.get('chasis1')?.setValue(null);
        this.maniobraForm.get('chasis2')?.setValue(null);
        this.maniobraForm.get('dolly')?.setValue(null);
      } else if (tipo === 'full') {
        this.maniobraForm.get('chasis')?.clearValidators();

        this.maniobraForm.get('chasis1')?.setValidators(Validators.required);
        this.maniobraForm.get('chasis2')?.setValidators(Validators.required);
        this.maniobraForm.get('dolly')?.setValidators(Validators.required);

        this.maniobraForm.get('chasis')?.setValue(null);
      } else {
        // Si no hay tipo seleccionado, limpiar validaciones
        this.maniobraForm.get('chasis')?.clearValidators();
        this.maniobraForm.get('chasis1')?.clearValidators();
        this.maniobraForm.get('chasis2')?.clearValidators();
        this.maniobraForm.get('dolly')?.clearValidators();

        this.maniobraForm.get('chasis')?.setValue(null);
        this.maniobraForm.get('chasis1')?.setValue(null);
        this.maniobraForm.get('chasis2')?.setValue(null);
        this.maniobraForm.get('dolly')?.setValue(null);
      }

      // Actualizar el estado de validez de los controles
      this.maniobraForm.get('chasis')?.updateValueAndValidity();
      this.maniobraForm.get('chasis1')?.updateValueAndValidity();
      this.maniobraForm.get('chasis2')?.updateValueAndValidity();
      this.maniobraForm.get('dolly')?.updateValueAndValidity();
    });
  }

  registrarManiobra() {
    if (this.maniobraForm.valid) {
      console.log('Formulario válido, enviando datos:', this.maniobraForm.value);
      // Aquí agregas la lógica para enviar los datos a tu backend o servicio
      alert('Maniobra registrada correctamente.');
      this.limpiarFormulario();
    } else {
      console.log('Formulario inválido:', this.maniobraForm.errors);
      this.maniobraForm.markAllAsTouched();
    }
  }

  limpiarFormulario() {
    this.maniobraForm.reset();
  }

  agregarOperador() {
    // Aquí podrías abrir un diálogo para agregar un operador nuevo
    alert('Función para agregar nuevo operador');
  }

  agregarCliente() {
    // Similar a agregarOperador, para clientes
    alert('Función para agregar nuevo cliente');
  }

  agregarTerminal() {
    // Similar para terminales
    alert('Función para agregar nueva terminal');
  }
}
