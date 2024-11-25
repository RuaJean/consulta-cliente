import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClienteService } from './cliente.service';
import { Cliente } from '../models/cliente.model';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ClienteService],
    });
    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería eliminar las comas del número de documento y hacer una solicitud GET', () => {
    const tipoDocumento = 'C';
    const numeroDocumento = '23,445,322';
    const numeroLimpio = '23445322';
    const mockResponse: Cliente = {
      tipoDocumento: 'C',
      numeroDocumento: '23445322',
      primerNombre: 'Jean',
      segundoNombre: 'Carlos',
      primerApellido: 'Pérez',
      segundoApellido: 'Ruiz',
      telefono: '123456789',
      direccion: 'Calle Falsa 123',
      ciudadResidencia: 'Bogotá',
    };

    service.buscarCliente(tipoDocumento, numeroDocumento).subscribe((cliente) => {
      expect(cliente).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `http://localhost:8090/api/v1/clientes/${tipoDocumento}/${numeroLimpio}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

  it('debería manejar un error 404 del servidor', () => {
    const tipoDocumento = 'C';
    const numeroDocumento = '99999999';
    const mockError = {
      statusCode: 404,
      message: 'Cliente no encontrado.',
      path: '/api/v1/clientes/C/99999999',
    };

    service.buscarCliente(tipoDocumento, numeroDocumento).subscribe({
      next: () => fail('Debería fallar con un error 404'),
      error: (error) => {
        expect(error.error).toEqual(mockError);
        expect(error.status).toBe(404);
      },
    });

    const req = httpMock.expectOne(
      `http://localhost:8090/api/v1/clientes/${tipoDocumento}/${numeroDocumento}`
    );
    req.flush(mockError, { status: 404, statusText: 'Not Found' }); 
  });
});
