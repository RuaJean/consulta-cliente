import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormIngresoRoutingModule } from './form-ingreso.routing.module'; 
import { FormIngresoComponent } from './container/form-ingreso.component'; 

@NgModule({
    declarations: [FormIngresoComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule, 
        FormIngresoRoutingModule,
    ],
})
export class FormIngresoModule {}
