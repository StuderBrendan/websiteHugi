import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3].map((n) => `../../assets/Images/Test_${n}.JPG`);


  constructor() {
  }

  ngOnInit() {
  }

}
