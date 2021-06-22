import { Component, OnInit } from '@angular/core';
import { AskChuck1Service } from 'src/app/services/ask-chuck1.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {



  constructor(private chuckService : AskChuck1Service) {


   }

  ngOnInit(): void {
  }

  resultado : any;
  piada : string ="Chuck Joke Generator";


  getJoke(){
    //this.piada = this.chuckService.piadaDoServico;
    this.chuckService.getPiada().subscribe(data => {this.resultado = data;
    this.piada = this.resultado.value});
  }

  piadas:any;

  getMoreJokes(valoraPesquisar: string){
    this.chuckService.getJokeFromCat(valoraPesquisar).subscribe(data => {this.piadas = data});

  }
}
