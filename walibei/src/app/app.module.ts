import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth/auth.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PaymentComponent } from './auth/components/payment/payment.component';
import { GuineaComponent } from './auth/components/guinea/guinea.component';
import { BurkinaComponent } from './auth/components/burkina/burkina.component';
import { DrcongoComponent } from './auth/components/drcongo/drcongo.component';
import { AboutUsComponent } from './auth/components/about-us/about-us.component';
import { ContactUsComponent } from './auth/components/contact-us/contact-us.component';
import { BlogComponent } from './auth/components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    PaymentComponent,
    GuineaComponent,
    BurkinaComponent,
    DrcongoComponent,
    AboutUsComponent,
    ContactUsComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
