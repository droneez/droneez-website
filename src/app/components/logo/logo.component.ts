import { Component, OnInit, Input } from '@angular/core';

@Component({
  	selector: 'app-logo',
  	templateUrl: './logo.component.html',
  	styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

	constructor() { }

	@Input() anim: boolean = false;
	@Input() title: boolean = true;
	@Input() speed: number = 700;

  	ngOnInit() {
  	}

}
