import { Component, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    category: string;
    scrollTop: number;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		@Inject(WINDOW) public window,
		private globals: Globals,
        private route: ActivatedRoute,
        private router: Router
	) {
		this.screenHeight = 0;
    	this.screenWidth = 0;
	}

	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
		this.globals.noChangeNavBg = true;
		this.globals.noFooter = true;
        this.category = this.route.snapshot.paramMap.get('category');
        this.toggleCard(this.category);
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
    		case 'certification': 
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
    		case 'evenement': 
    			this.isCertifOpen = false; 
    			this.isTeambuildingOpen = false;
    			this.isEventOpen = true; 
    			this.isWooploopOpen = false; 
    			break;
    		case 'coworking': 
    			this.isCertifOpen = false; 
    			this.isTeambuildingOpen = false;
    			this.isEventOpen = false; 
    			this.isWooploopOpen = true; 
    			break;
    		default: break;
    	}
    }

    closeCards() {
        this.isWooploopOpen = false;
    	this.isCertifOpen = false; 
		this.isTeambuildingOpen = false;
		this.isEventOpen = false; 
        if(this.category) this.router.navigateByUrl(this.globals.previousUrl);
    }

}
