import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  date:any;
  hrs:any;
  msg:any;

  constructor() { }

  ngOnInit() {
    this.setup();
  }

  setup():any {
    const date = new Date();
    const hrs = date.getHours();
    let msg = '';

    if (hrs >= 5 && hrs < 12) msg = "Good morning!";
    else if (hrs >= 12 && hrs < 17) msg = "Good afternoon!";
    else if (hrs >= 17 && hrs < 21) msg = "Good evening!";
    else msg = "Good night!";

    this.date = date;
    this.hrs = hrs;
    this.msg = msg;
  }

}
