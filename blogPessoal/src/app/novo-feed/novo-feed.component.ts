import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-novo-feed',
  templateUrl: './novo-feed.component.html',
  styleUrls: ['./novo-feed.component.css']
})
export class NovoFeedComponent implements OnInit {

  listaPostagens: Postagem []
  postagem: Postagem = new Postagem
  alerta:boolean = false
  titulo:string

  constructor( private postagemService: PostagemService) { }

  ngOnInit(){
    this.findAllPostagens()

    let item:string = localStorage.getItem('delOk')
    if(item == "true"){
      this.alerta = true
      localStorage.clear()
      setTimeout(() =>{
        location.assign('/feed')
      }, 3000)    
    }

  }
  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      location.assign("/novofeed")
    })
  }

}
