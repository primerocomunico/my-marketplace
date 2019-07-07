import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { environment } from '../../environments/environment';

// Servicios datos dummy
import { CatalogueService } from '../services/catalogue.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public _catalogue: CatalogueService, public _idRoute: ActivatedRoute, public _data: DataService, public _api: ApiService) { }

  // variables para rutas dinámicas
  id: number;
  sub: any;
  // Variable que almacenará los datos
  data: object[] = [{}];

  ngOnInit() {
    this.sub = this._idRoute.params.subscribe((params) => {
      this.id = params['id'];
      //console.log(this._data.data[this.id]["idProduct"]);
      // Realizar llamada GET utilizando el servicio _api
      this._api.get(environment.endpointUrl + `/product/${this.id}`, { 'Authorization': `bearer ${localStorage.getItem("Auth-store")}` })
        .subscribe((apiResult) => {
          this.data = apiResult;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // Sirve para borrar un producto en específico
  delProduct() {
    this._data.deleteProduct(this.data["idProduct"])
  }

}
