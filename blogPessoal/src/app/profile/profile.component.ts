import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  choose: boolean = false;
  usuario: usuario = new usuario

  constructor(private usuarioServices: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    localStorage.setItem('escolha', String(this.choose))
    this.editar();
  }

  editar() {
    let propFieldset = document.querySelector("fieldset");
    let propEdit = <HTMLInputElement>document.getElementById("save");
    let choose = localStorage.getItem('escolha')

    if (choose == 'true') {
      propFieldset.disabled = false;
      propEdit.disabled = false;
      localStorage.setItem('escolha', 'false');
    } else {
      propFieldset.disabled = true;
      propEdit.disabled = true;
      localStorage.setItem('escolha', 'true');
    }
  }

  findById(id:number){
    this.usuarioServices.getByIdUsuario(id).subscribe((resp: usuario) =>{
      this.usuario =resp
    })
  }
  salvar(){
    this.usuarioServices.putAlterar(this.usuario).subscribe((resp: usuario) =>{
      this.usuario = resp
      this.router.navigate(['/profile'])
      location.assign('/profile')

    })
  }
  deletar(){
    this.usuarioServices.deleteUsuario(this.usuario.id).subscribe((resp: usuario) =>{
      this.usuario = resp
      this.router.navigate(['/profile'])
      location.assign('/profile')
    })
  }


}
