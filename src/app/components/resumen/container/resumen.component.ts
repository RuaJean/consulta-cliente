import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-resumen',
    templateUrl: './resumen.component.html',
    styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent {
    cliente: any = {};

    constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
        this.cliente = navigation?.extras.state || {};
    }

    volver() {
        this.router.navigate(['/']);
    }
}
