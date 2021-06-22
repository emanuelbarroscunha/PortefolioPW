import { Injectable } from '@angular/core';
import { Artigo } from 'src/app/components/lista-de-compras/classes/artigo';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  listaCompras : Array<Artigo>  = new Array<Artigo>();
}
