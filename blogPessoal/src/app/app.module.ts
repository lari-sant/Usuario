import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NovoFeedComponent } from './novo-feed/novo-feed.component';
import {FormsModule} from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProfileComponent } from './profile/profile.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DoeComponent } from './doe/doe.component'

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FooterComponent,
    UsuarioComponent,
    NavbarComponent,
    NovoFeedComponent,
    EditarComponent,
    DeletarComponent,
    CadastrarComponent,
    ProfileComponent,
    DeleteUsuarioComponent,
    EditarUsuarioComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    DoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
