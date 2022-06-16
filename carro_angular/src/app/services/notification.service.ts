import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(private toastr: ToastrService) {}

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
  mostrarMensajeExitoso(mensaje: string, titulo: string) {
    this.toastr.success(mensaje, titulo);
  }

  mostrarError(mensaje: string, titulo: string) {
    this.toastr.error(mensaje, titulo);
  }

  mostrarInformacion(mensaje: string, titulo: string) {
    this.toastr.info(mensaje, titulo);
  }

  mostrarAlerta(mensaje: string, titulo: string) {
    this.toastr.warning(mensaje, titulo);
  }
}
