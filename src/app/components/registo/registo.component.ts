import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistoService } from './registo.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  constructor(private registo: RegistoService) {

  }

    registar()
    {
      this.registo.registar(this.nome,this.pass).subscribe(data => console.log
  (data));
    }

  ngOnInit(): void {
  }

  nome :string = "";
  pass :string  = "";



}
