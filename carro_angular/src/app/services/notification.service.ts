import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterRouteChange = false;

    constructor(private router: Router,private toastr: ToastrService) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert message
                
                }
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }
    mostrarMensajeExitoso(message:string, title:string){
        this.toastr.success(message, title)
    }
    
    mostrarError(message:string, title:string){
        this.toastr.error(message, title)
    }


}
