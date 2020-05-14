import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FeedComponent} from './feed/feed.component';
import {ContatoComponent} from './contato/contato.component'
import { UsuarioComponent } from './usuario/usuario.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'feed', component: FeedComponent},
  { path: 'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
