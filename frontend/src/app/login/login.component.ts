import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public _user:AuthService, public _api:ApiService, public _router:ActivatedRoute, public _data: DataService) { }

  ngOnInit() {
  }

  validateUser() {
    this._user.loginUsuario(this.username, this.password)
  }

}
