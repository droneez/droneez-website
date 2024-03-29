import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.scss']
})
export class ClubPageComponent {

	screenHeight:number = 0;
  	screenWidth:number = 0;

  	constructor(
  		@Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) public window,
    	private globals: Globals) {
    }

  	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
  	}

	@HostListener('window:resize', []) onResize() {
      	this.screenHeight = this.window.innerHeight;
      	this.screenWidth = this.window.innerWidth;
  	}

}
