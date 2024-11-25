import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FormIngresoRoutingModule } from './form-ingreso.routing.module'; // Importa el archivo de rutas
import { FormIngresoComponent } from './container/form-ingreso.component'; // Importa el componente

@NgModule({
    declarations: [FormIngresoComponent], // Declara el componente principal del módulo
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule, // Asegúrate de que esté importado aquí
        FormIngresoRoutingModule,
    ],
})
export class FormIngresoModule {}
