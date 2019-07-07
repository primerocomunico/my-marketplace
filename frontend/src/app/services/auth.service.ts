import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dataNewUser: object;
  dataLoginUser: object;

  flagAlert: boolean = false;
  errorLogin: string;

  isLogged: string;
  login() {
    this.isLogged = localStorage.getItem("Auth-store");
    this._router.navigateByUrl('/products');
  }
  logout() {
    this.isLogged = undefined;
    this._router.navigateByUrl('/login');
  }


  registrarUsuarioNuevo(username: string, password: string): void {
    this._api.post(environment.endpointUrl + "/register", {
      "username": username,
      "password": password
    })
      .subscribe(
        // Success
        (apiResult: object) => {
          // Debería estar documentado que recibo del backend
          this.dataNewUser = apiResult
          this.flagAlert = true;
          setTimeout(()=>{this.flagAlert = false}, 5000)
          this._router.navigateByUrl('/login');
        },
        // Error
        (error: string) => { console.log(error) }
      );

  }

  loginUsuario(username: string, password: string): void {
    this._api.post(environment.endpointUrl + "/login", {
      "username": username,
      "password": password
    })
      .subscribe(
        // Success
        (apiResult: object) => {
          // Debería estar documentado que recibo del backend
          this.dataLoginUser = apiResult
          localStorage.setItem("Auth-store", this.dataLoginUser["token"]);
          // Se compara la clave del objeto con undefined, eso indica que no existe
          if (this.dataLoginUser["wrong"] != undefined ) {
            this.logout();
            this.flagAlert = true;
            setTimeout(()=>{this.flagAlert = false}, 5000)
            setTimeout(()=>{this.errorLogin = this.dataLoginUser["wrong"]}, 5000)
          } else { this.login(); }
        },
        // Error
        (error: string) => {
          console.log(error)
          this.logout();
        }
      )
  }

  constructor(public _api: ApiService, public _router: Router) {
  }
}
