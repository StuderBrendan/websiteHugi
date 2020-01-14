import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css'],
  providers: [NgbCarouselConfig]
})
export class SalleComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6].map((n) => `../../assets/Images/Salle_${n}.JPG`);

  constructor() { }

  ngOnInit() {
  }

}
