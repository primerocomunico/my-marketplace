import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  sub: any;
  // Variable que almacenará los datos
  data: object[] = [];
  // Variable para almacenar un nuevo producto
  dataNewProduct: object;

  // Para visualizar el alert
  flagAlert: boolean = false;

  loadProducts() {
    // Realizar llamada GET utilizando el servicio _api
    this.sub = this._api.get(environment.endpointUrl + "/products", {'Authorization': `bearer ${localStorage.getItem("Auth-store")}`})
      .subscribe((apiResult) => {
        this.data = apiResult;
      });
  }

  // Crear función para poder publicar producto a producto, sería algo parecido a la función loadProducts()

  constructor(public _user:AuthService, public _api: ApiService, public _router: Router) {}

// Crear un nuevo producto
addNewProduct(productName: string, category: string, description: string, imageURL: string, currency: string, price: number): void {
   const token = localStorage.getItem("Auth-store"); //Recupera el token del localstorage
  this.sub = this._api.post(environment.endpointUrl + "/newproduct",  {
    "productName": productName,
    "category": category,
    "imageURL": imageURL,
    "description": description,
    "price": price,
    "currency": currency
  }, {'Authorization': `bearer ${token}`})
    .subscribe(
      // Success
      (apiResult: object) => {
        // Debería estar documentado que recibo del backend
        this.dataNewProduct = apiResult
        // Cambiamos el valor de flag y utilizamos setTimeout para borrarlo
        this.flagAlert = true;
        setTimeout(()=>{this.flagAlert = false}, 5000)
        this._router.navigateByUrl('/products');

      },
      // Error
      (error: string) => { console.log(error) }
    );
}

// Borrar producto
deleteProduct (idProduct: number){
  const token = localStorage.getItem("Auth-store")
  this.sub = this._api.delete(environment.endpointUrl + "/delete/" + idProduct, {'Authorization': `bearer ${token}`})
  .subscribe(
    // Success
    (apiResult: object) => {
      // Debería estar documentado que recibo del backend
      this.dataNewProduct = apiResult
      this.flagAlert = true;
      setTimeout(()=>{this.flagAlert = false}, 5000)
      this._router.navigateByUrl('/products');
    },
    // Error
    (error: string) => { console.log(error) }
  );
}

  // Para cerrar el observable
  desuscribirse() {
    this.sub.unsubscribe;
  }

}
