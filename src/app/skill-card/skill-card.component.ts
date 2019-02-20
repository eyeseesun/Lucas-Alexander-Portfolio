import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

	@Input() skill =
		{
			'name': 'JavaScript',
			'src': 'assets/js.png',
			'years': 4,
			'rating': 3.5
		};

	constructor() { }

	ngOnInit() {
	}

	ratingStars(num){
		return Array(Math.floor(num));
	}

	unratingStars(num){
		return Array(Math.abs(Math.ceil(num)-5));
	}

}
