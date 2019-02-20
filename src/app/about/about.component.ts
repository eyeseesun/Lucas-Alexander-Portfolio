import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	about = [
		`My name is Lucas Alexander.`,
		`I’m a developer from Halifax, Nova Scotia and I’ve spent the last few years completeing my Bachelor of Applied Computer Science at Dalhousie University.`,
		`I absolutely love programming and often find myself lost in my work for hours on end. It’s one of the most meaningful things in my life.`,
		`Currently I’m working a min-wage job counting inventory and going to school so I can survive, but man, working tech part-time would be real nice.`
	]

  constructor() { }

  ngOnInit() {
  }

}
