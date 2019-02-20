import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

	skills = [
		{
			'name': 'JavaScript',
			'src': 'assets/js.png',
			'years': 4,
			'rating': 3.5
		},
		{
			'name': 'PhotoShop',
			'src': 'assets/photoshop.png',
			'years': 2,
			'rating': 3.5
		},
		{
			'name': 'AngularJS',
			'src': 'assets/angular.png',
			'years': 2,
			'rating': 3
		},
		{
			'name': 'NodeJS',
			'src': 'assets/node.png',
			'years': 1,
			'rating': 1.5
		},
		{
			'name': 'jQuery',
			'src': 'assets/jQuery.png',
			'years': 4,
			'rating': 3.5
		},
		{
			'name': 'Ionic',
			'src': 'assets/ionic.png',
			'years': 1.5,
			'rating': 2.5
		},
		{
			'name': 'CSS',
			'src': 'assets/css.png',
			'years': 4,
			'rating': 3.5
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
