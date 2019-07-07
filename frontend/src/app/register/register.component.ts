import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;

  constructor(public _user:AuthService, public _api:ApiService, public _router:ActivatedRoute) { }

  ngOnInit() {
  }

  registrar() {
    this._user.registrarUsuarioNuevo(this.username, this.password)
  }

}
