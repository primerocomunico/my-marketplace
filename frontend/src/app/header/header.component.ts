import { Component, OnInit } from '@angular/core';

// Servicios datos dummy
import { CatalogueService } from '../services/catalogue.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _catalogue: CatalogueService, public _data: DataService) { }

  ngOnInit() {
  }

}
