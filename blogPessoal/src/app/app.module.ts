import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';
import { ContatoComponent } from './contato/contato.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    // NavbarComponent,
    FooterComponent,
    ContatoComponent,
    UsuarioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
