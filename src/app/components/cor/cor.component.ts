import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-cor',
  templateUrl: './cor.component.html',
  styleUrls: ['./cor.component.css']
})
export class CorComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  change(){
    this.elementRef.nativeElement.ownerDocument
    .body.style.background = '#282838f6';
    this.elementRef.nativeElement.ownerDocument
    .body.style.transition = '2s';
  }

}
