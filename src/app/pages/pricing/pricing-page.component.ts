import { Component, OnInit } from '@angular/core';
import { Globals } from "./../../globals";

@Component({
  	selector: 'app-pricing-page',
  	templateUrl: './pricing-page.component.html',
  	styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

  	constructor(private globals: Globals) { }

  	ngOnInit() {
  		this.globals.noChangeNavBg = true;
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
    }

}
