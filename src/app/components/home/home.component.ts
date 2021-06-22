import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  changeLeft(teste)
  {
    teste.style.marginLeft="1700px";
  }

  changeBack(teste)
  {
    teste.style.marginLeft="0";
  }

  changeRight(teste)
  {
    teste.style.marginLeft="-1400px";
  }



play()
{

  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}
  constructor(private router: Router  ) { }


  ngOnInit(): void {
  }

}
