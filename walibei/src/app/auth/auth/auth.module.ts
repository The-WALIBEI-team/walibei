import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProduitComponent } from '../components/produit/produit.component';
import { ServiceComponent } from '../components/service/service.component'; 
import { EmploiComponent } from '../components/emploi/emploi.component'; 
import { LivraisonComponent } from '../components/livraison/livraison.component'; 
import { TarifsComponent } from '../components/tarifs/tarifs.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProduitComponent,
    ServiceComponent,
    EmploiComponent, 
    LivraisonComponent,
    TarifsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  exports : [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }