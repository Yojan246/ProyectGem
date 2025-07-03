import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionOperadorComponent } from './informacion-operador.component';

describe('InformacionOperadorComponent', () => {
  let component: InformacionOperadorComponent;
  let fixture: ComponentFixture<InformacionOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
