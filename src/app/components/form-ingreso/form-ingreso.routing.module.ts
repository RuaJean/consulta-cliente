import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormIngresoComponent } from './container/form-ingreso.component';

const routes: Routes = [
    { path: '', component: FormIngresoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule],
})
export class FormIngresoRoutingModule {}
