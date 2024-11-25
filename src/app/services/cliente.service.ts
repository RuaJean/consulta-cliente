import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
    providedIn: 'root', 
})
export class ClienteService {
    private apiUrl = 'http://52.14.97.163:8090/api/v1/clientes';
    

    constructor(private http: HttpClient) {} 

    buscarCliente(tipoDocumento: string, numeroDocumento: string): Observable<Cliente> {
        // Elimina las comas en el número de documento
        const numeroSinComas = numeroDocumento.replace(/,/g, '');
        // Construye la URL con el número limpio
        return this.http.get<Cliente>(`${this.apiUrl}/${tipoDocumento}/${numeroSinComas}`);
    }
}
