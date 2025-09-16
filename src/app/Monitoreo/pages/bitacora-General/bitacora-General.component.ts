import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bitacora-General',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './bitacora-General.component.html',
  styleUrls: ['./bitacora-General.component.scss']
})
export class BitacoraGeneralComponent implements OnInit {
  registros: any[] = [];
  registrosFiltrados: any[] = [];
  estadoSeleccionado: string[] = [];
  tipoMovimientoSeleccionado: string[] = [];

  // Para controlar el formulario
  mostrarFormulario: boolean = false;
  nuevoRegistro: any = {
    operador: '',
    unidad: '',
    equipo: '',
    contenedor: '',
    cliente: '',
    descripcion: '',
    estado: '',
    tipoMovimiento: ''
  };

  columnas: string[] = [
    'estado','tipoMovimiento','fecha','hora','operador',
    'unidad','equipo','contenedor','cliente','estatus','descripcion'
  ];

  estadosDisponibles: string[] = ['activo','pendiente','programado','inactivo'];
  tiposMovimientoDisponibles: string[] = ['Viajes','Maniobras en puerto','Vacíos','Movimientos locales'];

  ngOnInit(): void {
    this.registros = [
      { fechaRegistro: '2025-07-11', horaRegistro: '08:00', operador: 'Juan Pérez', unidad: 'Unidad 1', equipo: 'Equipo A', contenedor: 'CONT-123', cliente: 'Cliente A', estado: 'activo', estatusSeguimiento: 'maniobra de seguimiento', descripcion: 'Todo bien durante la carga.', tipoMovimiento: 'Viajes' },
      { fechaRegistro: '2025-07-10', horaRegistro: '15:30', operador: 'Ana López', unidad: 'Unidad 2', equipo: 'Equipo B', contenedor: 'CONT-456', cliente: 'Cliente B', estado: 'pendiente', estatusSeguimiento: 'maniobra de seguimiento', descripcion: 'Falta asignar terminal.', tipoMovimiento: 'Maniobras en puerto' },
      { fechaRegistro: '2025-07-09', horaRegistro: '07:15', operador: 'Carlos Gómez', unidad: 'Unidad 3', equipo: 'Equipo C', contenedor: 'CONT-789', cliente: 'Cliente C', estado: 'programado', estatusSeguimiento: 'preparación', descripcion: 'En espera de autorización.', tipoMovimiento: 'Vacíos' },
      { fechaRegistro: '2025-07-08', horaRegistro: '09:45', operador: 'Luisa Martínez', unidad: 'Unidad 4', equipo: 'Equipo D', contenedor: 'CONT-101', cliente: 'Cliente D', estado: 'inactivo', estatusSeguimiento: 'sin movimiento', descripcion: 'Contenedor en patio sin actividad.', tipoMovimiento: 'Movimientos locales' },
      { fechaRegistro: '2025-07-07', horaRegistro: '12:00', operador: 'Andrés López', unidad: 'Unidad 5', equipo: 'Equipo E', contenedor: 'CONT-202', cliente: 'Cliente E', estado: 'activo', estatusSeguimiento: 'maniobra de seguimiento', descripcion: 'Salida programada completada.', tipoMovimiento: 'Viajes' },
      { fechaRegistro: '2025-07-06', horaRegistro: '16:30', operador: 'Diana Ruiz', unidad: 'Unidad 6', equipo: 'Equipo F', contenedor: 'CONT-303', cliente: 'Cliente F', estado: 'pendiente', estatusSeguimiento: 'en espera', descripcion: 'Falta confirmación del cliente.', tipoMovimiento: 'Maniobras en puerto' }
    ];

    this.filtrarRegistros();
  }

  // Estilos por estado
  getStyleEstado(estado: string) {
    switch (estado.toLowerCase()) {
      case 'activo': return { backgroundColor: '#d1fae5', color: '#065f46', border: '1px solid #10b981', padding: '4px 8px', borderRadius: '9999px' };
      case 'pendiente': return { backgroundColor: '#fef9c3', color: '#92400e', border: '1px solid #facc15', padding: '4px 8px', borderRadius: '9999px' };
      case 'programado': return { backgroundColor: '#e0f2fe', color: '#0369a1', border: '1px solid #38bdf8', padding: '4px 8px', borderRadius: '9999px' };
      case 'inactivo': return { backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #9ca3af', padding: '4px 8px', borderRadius: '9999px' };
      default: return { backgroundColor: '#f9fafb', color: '#6b7280', border: '1px solid #d1d5db', padding: '4px 8px', borderRadius: '9999px' };
    }
  }

  // Filtrado tabla general
  filtrarRegistros() {
    this.registrosFiltrados = this.registros.filter(r => {
      const estadoMatch = this.estadoSeleccionado.length === 0 || this.estadoSeleccionado.includes(r.estado);
      const tipoMatch = this.tipoMovimientoSeleccionado.length === 0 || this.tipoMovimientoSeleccionado.includes(r.tipoMovimiento);
      return estadoMatch && tipoMatch;
    });
  }

  quitarEstado(estado: string) {
    this.estadoSeleccionado = this.estadoSeleccionado.filter(e => e !== estado);
    this.filtrarRegistros();
  }

  quitarTipoMovimiento(tipo: string) {
    this.tipoMovimientoSeleccionado = this.tipoMovimientoSeleccionado.filter(t => t !== tipo);
    this.filtrarRegistros();
  }

  // Mostrar formulario
  agregarRegistro() {
    this.mostrarFormulario = true;
  }

  // Guardar registro
  guardarRegistro() {
    if (!this.nuevoRegistro.operador || !this.nuevoRegistro.tipoMovimiento || !this.nuevoRegistro.estado) {
      alert('Debe completar los campos obligatorios.');
      return;
    }

    const fecha = new Date();
    const nuevo = {
      ...this.nuevoRegistro,
      fechaRegistro: fecha.toISOString().split('T')[0],
      horaRegistro: fecha.toTimeString().split(' ')[0],
      estatusSeguimiento: 'pendiente'
    };

    this.registros.push(nuevo);
    this.filtrarRegistros();

    // Limpiar formulario
    this.nuevoRegistro = {
      operador: '',
      unidad: '',
      equipo: '',
      contenedor: '',
      cliente: '',
      descripcion: '',
      estado: '',
      tipoMovimiento: ''
    };
    this.mostrarFormulario = false;
  }

  cancelarRegistro() {
    this.mostrarFormulario = false;
    this.nuevoRegistro = {
      operador: '',
      unidad: '',
      equipo: '',
      contenedor: '',
      cliente: '',
      descripcion: '',
      estado: '',
      tipoMovimiento: ''
    };
  }

  // ---------------------------
  // Tabla dinámica según botón
  // ---------------------------
  seleccionarTipo(tipo: string) {
    // Función de ejemplo, mantiene tu lógica anterior
  }
}
