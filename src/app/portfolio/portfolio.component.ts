import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

	portfolioCard = [
		{
			'title': 'Joakes.me - Website',
			'description': 'Developed an online artist gallery for Jeremy Oakes, utilizing AngularJS and GSAP.',
			'src': 'assets/port_1.png',
			'href': 'https://www.joakes.me'
		},
		{
			'title': 'Budgo - Android App',
			'description': 'Budgeting app for android using the Ionic development suite.',
			'src': 'assets/port_2.png',
			'href': 'https://play.google.com/store/apps/details?id=es.budgo.starter&hl=en_ZA'
		},
		{
			'title': 'Bullet-Lists',
			'description': 'Ionic V4 App for making small, reusable todo lists. (Made it for me!)',
			'src': 'assets/port_4.png',
			'href': 'https://play.google.com/store/apps/details?id=io.bulletlists.lucasalexander'
		},
		{
			'title': 'DashLearn - DAL Project',
			'description': 'Flash card application using vanilla JS, jQuery, PHP, HTML, and CSS. Not really for mobile.',
			'src': 'assets/port_3.png',
			'href': 'https://web.cs.dal.ca/~lucasc/csci3172/dashlearn/'
		}
	]

	constructor() { }

	ngOnInit() {
	}

}
