import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.css']
})
export class PortfolioCardComponent implements OnInit {

	@Input() title: string = "Title - Theme";
	@Input() description: string = "This is a description of the garbage you're going to put in here";
	@Input() src: string = "";
	@Input() href: string = "";

	constructor() { }

	ngOnInit() {
	}

}
