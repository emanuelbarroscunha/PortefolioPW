import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.lerCookies();
  }


  aceiteiCookie:boolean | undefined;

  aceitarCookies(ctn:HTMLElement){
    localStorage.setItem('cookie','1');
    ctn.style.display="none";
  }
  lerCookies(){
    this.aceiteiCookie=localStorage.getItem('cookie')=='1'? true : false;
  }
}
