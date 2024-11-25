import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path: '',
        loadChildren: () =>
            import('./components/form-ingreso/form-ingreso.module').then(
                (m) => m.FormIngresoModule
            ),
    },
    {
        path: 'resumen',
        loadChildren: () =>
            import('./components/resumen/resumen.module').then((m) => m.ResumenModule),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule],
})
export class AppRoutingModule {}
