import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

// Routing
import { MonitoreoRoutingModule } from './monitoreo-routing.module';

@NgModule({
  declarations: [], // Sin declarar componentes standalone
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
