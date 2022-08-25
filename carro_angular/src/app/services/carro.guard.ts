import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class CarroGuard implements CanActivate {


  /**
   *
   */
  constructor( private _authservide: AuthenticationService, private _router: Router) {

  }

  canActivate():boolean {

      if(this._authservide.loggedIn() ){

        return true;
      }
      else{
        this._router.navigate(['/login']);
        return false;
      }
  }

}
