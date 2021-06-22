import { Component, ElementRef, OnInit } from '@angular/core';

declare const myTest: any;


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.change();
  }

  change(){
    this.elementRef.nativeElement.ownerDocument
    .body.style.background = 'rgb(75, 75, 82)';
  }

}
