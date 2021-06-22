import { Component, OnInit } from '@angular/core';
import { DungeonService } from '../dungeon.service';

@Component({
  selector: 'app-testar',
  templateUrl: './testar.component.html',
  styleUrls: ['./testar.component.css']
})
export class TestarComponent implements OnInit {

  constructor(servicoDungeon : DungeonService) { }

  ngOnInit(): void {
  }
  doLogin(nome,pass){
  
  }
}
