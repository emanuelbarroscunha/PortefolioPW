import { Component, OnInit } from '@angular/core';
import { Artigo } from '../classes/artigo';

import { ListaService } from 'src/services/lista.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  listaService : ListaService;

  constructor(private lista : ListaService) {
    this.listaService = lista;

  }

  ngOnInit(): void {
  }

  AdicionarLista(nome, preco){
    this.listaService.listaCompras.push(new Artigo(nome, preco));
  }

}
