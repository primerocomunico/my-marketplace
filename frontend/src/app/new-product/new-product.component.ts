import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  productName: string;
  category: string;
  description: string;
  imageURL: string;
  currency: string;
  price: number;

  constructor(public _data:DataService, public _api:ApiService, public _router:ActivatedRoute) { }

  ngOnInit() {
  }

  addProduct() {
    this._data.addNewProduct(this.productName, this.category, this.description, this.imageURL, this.currency, this.price)
  }

}
