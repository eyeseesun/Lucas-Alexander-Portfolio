import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

	@Input() title: String = "Anyway, this is my Portfolio";
	@Input() weird: boolean = false;

	constructor() { }

	ngOnInit() {
	}

}
