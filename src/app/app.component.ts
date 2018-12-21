import { Component, HostListener, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./services/window.service";
import { fadeInAnimation, footerAnimation } from "./animations/animations";

import { ScrollToAnimationEasing, ScrollToEvent, ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	animations:[ fadeInAnimation, footerAnimation ],
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'droneez-website';
    screenHeight:number;
    routeAnimate:boolean;

	public ngxScrollToEvent: ScrollToEvent;
	public ngxScrollToDuration: number;
	public ngxScrollToEasing: ScrollToAnimationEasing;
	public ngxScrollToOffset: number;
	time:number;
	timeBefore:number = 0;
	offsetBefore: number = 0;
 
	constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,private scrollToService: ScrollToService
    ) {
		this.screenHeight = 0;
    	this.routeAnimate = false;

    	this.ngxScrollToOffset = 1000;
	    this.ngxScrollToEvent = 'wheel';
	    this.ngxScrollToDuration = 2500;
	    this.ngxScrollToEasing = 'easeInOutQuad';
    }

    ngOnInit() {
    	this.screenHeight = this.window.innerHeight;
    }

	/*onActivate(event) {
	   //setTimeout(()=>{
	    	//this.window.scroll(0,0);
	   //},1000);
	    //or this.document.body.scrollTop = 0;
	    //or this.document.querySelector('body').scrollTo(0,0)
	}*/


	// Pour faire marcher les animations sur le rooting
	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
    }

    /*@HostListener('mousewheel', ['$event']) onMousewheel(e) {
    	e.preventDefault();
    	this.time = Date.now();

	    	    	
	    	const config: ScrollToConfigOptions = {
				offset: e.deltaY*Math.abs(e.wheelDelta)/50,
				easing: 'easeOutQuint',
				duration: 650
		    };

		    if(this.time - this.timeBefore > 200){
	    		this.timeBefore = this.time;
	    	} else {
	    		if(	e.deltaY < 0 && config.offset > this.offsetBefore	|| 
	    			e.deltaY > 0 && config.offset < this.offsetBefore) {
		    		config.offset = this.offsetBefore;
	    		}
	    	}

	    	this.offsetBefore = config.offset;
	    	
	        this.scrollToService
	        	.scrollTo(config);
        
    }*/

}
