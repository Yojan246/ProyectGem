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
import { BitacoraGeneralComponent } from './pages/bitacora-General/bitacora-General.component';
// O la ruta donde esté el componente

@NgModule({
  declarations: [], // o elimina completamente si no hay componentes no-standalone
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

