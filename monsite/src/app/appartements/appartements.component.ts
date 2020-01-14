import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appartements',
  templateUrl: './appartements.component.html',
  styleUrls: ['./appartements.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppartementsComponent implements OnInit {
  images_chambres = [1, 2, 3, 4, 5, 6].map((n) => `../../assets/Images/Chambre_${n}.JPG`);
  images_salon = [1, 2].map((n) => `../../assets/Images/Salon_${n}.JPG`);
  images_bains = [1, 2, 3, 4, 5].map((n) => `../../assets/Images/Bains_${n}.JPG`);

  constructor() { }

  ngOnInit() {
  }
}
