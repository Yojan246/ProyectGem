import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa ReactiveFormsModule para formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

// Importa Angular Material modules que usarás
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

import { MonitoreoRoutingModule } from './monitoreo-routing.module';
import { BitacoraFormularioComponent } from './pages/bitacora-formulario/bitacora-formulario.component';
// O la ruta donde esté el componente

@NgModule({
  declarations: [
    BitacoraFormularioComponent,  // Aquí declaras el componente del formulario
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MonitoreoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule
  ]
})
export class MonitoreoModule { }
