import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenComponent } from './components/resumen/container/resumen.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResumenComponent', () => {
  let component: ResumenComponent;
  let fixture: ComponentFixture<ResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumenComponent], 
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
