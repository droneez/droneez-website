import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";

@Component({
	selector: 'app-cowork-page',
	templateUrl: './cowork-page.component.html',
	styleUrls: ['./cowork-page.component.scss']
})
export class CoworkPageComponent {

    screenHeight:number = 0;
    screenWidth:number = 0;

	constructor(
		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window) { 
	}

	ngOnInit() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
	}

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

}
