import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';

@Component({
    selector: 'app-form-ingreso',
    templateUrl: './form-ingreso.component.html',
    styleUrls: ['./form-ingreso.component.scss'],
})
export class FormIngresoComponent {
    formIngreso: FormGroup;
    errorMessage: string | null = null;
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private clienteService: ClienteService
    ) {
        this.formIngreso = this.fb.group({
            tipoDocumento: ['', Validators.required],
            numeroDocumento: [
                '',
                [Validators.required, Validators.minLength(8), Validators.maxLength(11)],
            ],
        });
    }

    buscarCliente() {
        if (this.formIngreso.valid) {
            const { tipoDocumento, numeroDocumento } = this.formIngreso.value;

            this.errorMessage = null;

            this.clienteService
                .buscarCliente(tipoDocumento, numeroDocumento)
                .subscribe({
                    next: (cliente) => {
                        this.router.navigate(['/resumen'], { state: cliente });
                    },
                    error: (err) => {
                        // Manejo del error y asignación del mensaje
                        this.errorMessage = err.error?.message || 'Ocurrió un error inesperado.';
                    },
                });
        }
    }

    formatNumeroDocumento() {
        const numero = this.formIngreso.get('numeroDocumento')?.value || '';
        const formateado = numero.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.formIngreso.get('numeroDocumento')?.setValue(formateado, { emitEvent: false });
    }
}
