import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';

// Services
import { CatalogueService } from './services/catalogue.service';
import {ApiService} from './services/api.service';
import {AuthService} from './services/auth.service';
import {DataService} from './services/data.service';
import {AuthguardGuard} from './guards/authguard.guard';

// Routing
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';

// Rutas URL
const misRutas: Routes = [
  {'path': 'register', 'component': RegisterComponent},
  {'path': 'login', 'component': LoginComponent},
  { 'path': 'products', 'component': HomeComponent, 'canActivate': [AuthguardGuard]},
  { 'path': 'product/:id', 'component': DetailComponent, 'canActivate': [AuthguardGuard]},
  { 'path': 'newproduct', 'component': NewProductComponent, 'canActivate': [AuthguardGuard]},
  { 'path': ' ', 'component': LoginComponent },
  { 'path': '**', 'component': LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(misRutas),
    HttpClientModule
  ],
  providers: [ApiService, AuthService, CatalogueService, DataService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
