import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logedin',
  templateUrl: './logedin.component.html',
  styleUrls: ['./logedin.component.css']
})
export class LogedinComponent implements OnInit {
  calendar: any;
  events: any;

  constructor() { }

  ngOnInit(): void {
  }

}
