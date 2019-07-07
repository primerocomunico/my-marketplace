import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private _router: Router) { }

  // Si utilizamos el token para mantener sesión el authgard se debe comparar con el token del localStorage
  canActivate() {
    if (localStorage.getItem("Auth-store") != undefined) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
