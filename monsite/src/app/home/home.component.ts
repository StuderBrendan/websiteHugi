import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3].map((n) => `../../assets/Images/Test_${n}.JPG`);


  constructor() {
  }

  ngOnInit() {
  }

}
