import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  date: Date = new Date();
  hrs: number = this.date.getHours();
  msg: string = "";

  constructor() {
    if ( this.hrs >= 5 && this.hrs < 12 ) this.msg = "Good morning!";
    if ( this.hrs >= 12 && this.hrs < 17 ) this.msg = "Good afternoon!";
    if ( this.hrs >= 17 && this.hrs < 21 ) this.msg = "Good evening!";
    if ( this.hrs >= 21 && this.hrs < 5 ) this.msg = "Good night!";
  }

  ngOnInit() { }

}
