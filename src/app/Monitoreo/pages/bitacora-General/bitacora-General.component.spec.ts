import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BitacoraGeneralComponent } from './bitacora-General.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BitacoraGeneralComponent', () => {
  let component: BitacoraGeneralComponent;
  let fixture: ComponentFixture<BitacoraGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitacoraGeneralComponent, NoopAnimationsModule] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(BitacoraGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter registros by estado', () => {
    component.registros = [
      { estado: 'activo' },
      { estado: 'pendiente' },
      { estado: 'activo' },
    ];
    component.estadoSeleccionado = 'activo';
    component.filtrarPorEstado();
    expect(component.registrosFiltrados.length).toBe(2);
  });
});
