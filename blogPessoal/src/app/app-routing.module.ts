import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedComponent} from './feed/feed.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NovoFeedComponent } from './novo-feed/novo-feed.component';
import { EditarComponent } from './editar/editar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProfileComponent } from './profile/profile.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DoeComponent } from './doe/doe.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'feed', component: FeedComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'novofeed', component: NovoFeedComponent},
  { path: 'editar/:id', component: EditarComponent},
  {path: 'deletar/:id', component: DeletarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'editarusuario/:id', component: EditarUsuarioComponent},
  {path: 'deleteusuario/:id', component: DeleteUsuarioComponent},
  {path: 'card', component: CardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'doe', component: DoeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
