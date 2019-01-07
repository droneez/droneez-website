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
    isCertifOpen:boolean 		= false;
    isTeambuildingOpen:boolean 	= false;
    isEventOpen:boolean 		= false;
    isWooploopOpen:boolean 		= false;

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

    toggleCard(cardname:string) {
    	switch(cardname){
    		case 'certif': 
    			this.isCertifOpen = true; 
    			this.isTeambuildingOpen = false;
    			this.isEventOpen = false; 
    			this.isWooploopOpen = false; 
    			break;
    		case 'teambuilding': 
    			this.isCertifOpen = false; 
    			this.isTeambuildingOpen = true;
    			this.isEventOpen = false; 
    			this.isWooploopOpen = false;
    			break;
    		case 'event': 
    			this.isCertifOpen = false; 
    			this.isTeambuildingOpen = false;
    			this.isEventOpen = true; 
    			this.isWooploopOpen = false; 
    			break;
    		case 'wooploop': 
    			this.isCertifOpen = false; 
    			this.isTeambuildingOpen = false;
    			this.isEventOpen = false; 
    			this.isWooploopOpen = true; 
    			break;
    		default: break;
    	}
    }

    closeCards() {
    	this.isCertifOpen = false; 
		this.isTeambuildingOpen = false;
		this.isEventOpen = false; 
		this.isWooploopOpen = false;	
    }

}
