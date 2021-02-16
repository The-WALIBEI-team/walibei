import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitComponent } from './produit/produit.component';
import { ServiceComponent } from './service/service.component';
import { EmploiComponent } from './emploi/emploi.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { TarifsComponent } from './tarifs/tarifs.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "accueil"},
  {path: 'accueil', component: AccueilComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'produit', component: ProduitComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'emploi', component: EmploiComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path: 'tarifs', component: TarifsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }