import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";

@Component({
	selector: 'app-booking-pro-page',
	templateUrl: './booking-pro-page.component.html',
	styleUrls: ['./booking-pro-page.component.scss']
})
export class BookingProPageComponent {

	screenHeight:number = 0;
    screenWidth:number = 0;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		@Inject(WINDOW) public window,
		private globals: Globals
	) {
		this.screenHeight = 0;
    	this.screenWidth = 0;
	}

	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
		this.globals.noChangeNavBg = true;
		this.globals.noFooter = true;
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.globals.noFooter = false;
    }

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

}
