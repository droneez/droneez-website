import { Component, HostListener, Renderer2, ElementRef, Inject, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";

@Component({
  	selector: 'app-news-page',
  	templateUrl: './news-page.component.html',
  	styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements AfterViewInit {

	articles:any[];
	showCardId:number;
    screenHeight:number = 0;
	offset:number = 0;
	@ViewChildren("card", {read: ElementRef}) cardList : QueryList<ElementRef>;

  	constructor(
  		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private renderer: Renderer2
    ) { }

    ngAfterViewInit() {
    	this.screenHeight = this.window.innerHeight;
  		this.showCard();
    }

  	ngOnInit() {

  		this.globals.noChangeNavBg = true;
  		this.showCardId = 0;

  		this.articles = [
  			{title: "bobby"},
  			{title: "baba"},
  			{title: "bubu"},
  			{title: "bebe"},
  			{title: "baba"},
  			{title: "bubu"},
  			{title: "bebe"}
  		];
		
  	}

  	showCard() {
  		this.cardList.forEach((element, index)=>{
  			let show = element.nativeElement.offsetTop < (this.offset + this.screenHeight - 150);
			if (show) {
				setTimeout( () => {
					this.renderer.addClass(element.nativeElement, 'show-card');
				},100*(index%3),element);
			} else {
				setTimeout( () => {
					this.renderer.removeClass(element.nativeElement, 'show-card');
				}, 100*(index%3),element);
			}
  		})
  	}

  	ngOnDestroy() {
  		this.globals.noChangeNavBg = false;
  	}


  	@HostListener("window:scroll", []) onWindowScroll() {
        this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.showCard();
    }

    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.showCard();
    }

}
