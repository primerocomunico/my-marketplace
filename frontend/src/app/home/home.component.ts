import { Component, OnInit } from '@angular/core';

// Servicios datos dummy
import { CatalogueService } from '../services/catalogue.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  htmlNewProduct: string;

  constructor(public _catalogue: CatalogueService, public _data: DataService) { }

  // TODO crear alerts insertando html con setTimeout
  /*newProduct() {
  setTimeout(() => {
    this.htmlNewProduct = `<div class="alert alert-success" role="alert">
      ${this._data.dataNewProduct["success"]}</div>`
  }, 3000);
}*/

  ngOnInit() {

    this._data.loadProducts();
  }

}
