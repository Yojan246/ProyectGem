import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraFormularioComponent } from './bitacora-formulario.component';

describe('BitacoraFormularioComponent', () => {
  let component: BitacoraFormularioComponent;
  let fixture: ComponentFixture<BitacoraFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitacoraFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitacoraFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
