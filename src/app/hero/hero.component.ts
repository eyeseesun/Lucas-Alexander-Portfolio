import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroImage = 'assets/hero.png';
	heroImageMobile = 'assets/hero-mobile.png';
	mobile: boolean = false;

  constructor() {
  	if($(window).innerWidth() < 800){
  		this.mobile = true;
  	}
  }

  ngOnInit() {
  }

}
