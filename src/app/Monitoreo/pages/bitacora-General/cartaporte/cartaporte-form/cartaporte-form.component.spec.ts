import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaporteFormComponent } from './cartaporte-form.component';

describe('CartaporteFormComponent', () => {
  let component: CartaporteFormComponent;
  let fixture: ComponentFixture<CartaporteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaporteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaporteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
