import { Component, OnInit } from '@angular/core';
//import { dirname } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3].map((n) => `../../assets/Images/carousel${n}.jpg`);


  constructor() { 
  }

  ngOnInit() {
  }

}
