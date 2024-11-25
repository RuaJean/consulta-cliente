import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormIngresoComponent } from './form-ingreso.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormIngresoComponent', () => {
  let component: FormIngresoComponent;
  let fixture: ComponentFixture<FormIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormIngresoComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule, 
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
