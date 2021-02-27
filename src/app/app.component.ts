import { Component,ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bid-my-craft';
  slides = [
    {img: "../assets/images/banner-1.jpg"},
    {img: "../assets/images/banner-1.jpg"},
    {img: "../assets/images/banner-1.jpg"},
    {img: "../assets/images/banner-1.jpg"}
  ];
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1
  };

  slideConfig1 = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    autoplay:true,
    "infinite": true
  };
  
next() {
  this.slickModal.slickNext();
}

prev() {
  this.slickModal.slickPrev();
}
  
}
