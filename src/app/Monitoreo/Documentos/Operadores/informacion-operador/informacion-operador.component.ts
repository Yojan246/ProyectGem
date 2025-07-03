import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-informacion-operador',
  imports: [CommonModule],
  templateUrl: './informacion-operador.component.html',
  styleUrls: ['./informacion-operador.component.scss']
})
export class InformacionOperadorComponent {
  operadores = [
   {
      nombre: 'Mauricio Galindo Rodriguez',
      licencia: 'MAGAWWE534',
      fechaNacimiento: '1877-06-15',
      correo: 'Mauga@gmail.com',
      curp: 'CURP000000MAURICIO',
      telefono: '555-123-4567',
      deoUrl: null as string | null
    },
    {
      nombre: 'Bogar Mendoza',
      licencia: 'XYZ12345',
      fechaNacimiento: '1980-01-01',
      correo: 'ejemplo@correo.com',
      curp: 'CURP000000EJEMPLO',
      telefono: '555-987-6543',
      deoUrl: null as string | null
    },
    {
      nombre: 'Alejandro Ramos',
      licencia: 'ALEJ998877',
      fechaNacimiento: '1992-04-18',
      correo: 'alejandro.ramos@mail.com',
      curp: 'RAMO920418HDFLNL07',
      telefono: '555-321-7654',
      deoUrl: null
    },
    {
      nombre: 'Cristian Arguelles',
      licencia: 'CRIS553322',
      fechaNacimiento: '1987-09-30',
      correo: 'cristian.arguelles@mail.com',
      curp: 'ARGC870930HDFNRN05',
      telefono: '555-654-1234',
      deoUrl: null
    },
    {
      nombre: 'Adan Marquez',
      licencia: 'ADMA001122',
      fechaNacimiento: '1990-12-12',
      correo: 'adan.marquez@mail.com',
      curp: 'MAQA901212HDFTRD02',
      telefono: '555-789-4561',
      deoUrl: null
    },
    {
      nombre: 'Joaquin Torres',
      licencia: 'JOAQ776655',
      fechaNacimiento: '1985-07-22',
      correo: 'joaquin.torres@mail.com',
      curp: 'TORJ850722HDFSPN08',
      telefono: '555-852-9630',
      deoUrl: null
    },
    {
      nombre: 'Jacobo Lopez',
      licencia: 'JALO445566',
      fechaNacimiento: '1995-03-09',
      correo: 'jacobo.lopez@mail.com',
      curp: 'LOPJ950309HDFDZN06',
      telefono: '555-369-1470',
      deoUrl: null
    }
  ];

  cargarDEO(event: Event, operador: any) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        operador.deoUrl = reader.result as string;
        console.log(`PDF cargado para ${operador.nombre}`);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Por favor selecciona un archivo PDF válido.');
    }
  }

  descargarDEO(operador: any) {
    if (!operador.deoUrl) return;

    const link = document.createElement('a');
    link.href = operador.deoUrl;
    link.download = `${operador.nombre}-DEO.pdf`;
    link.click();
  }
}
