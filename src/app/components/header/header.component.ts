import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	isCollapsed = false;
	toggleAnim = false;
	isReachingTop = true;
	offset = 0;

	constructor(
  		@Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) private window,
    	public globals: Globals) {
  	}

	ngOnInit() {
	}

	toggleCollapse() {
		// A l ouverture
		if(!this.isCollapsed) {
			this.isCollapsed = true;
			// Le temps que l element s affiche dans le dom via display:block
			setTimeout(()=>{
				this.toggleAnim = true;
			},30);
		// A la fermeture
		} else {
			this.toggleAnim = false;
			// Le temps que l animation se termine
			setTimeout(()=>{
				this.isCollapsed = false;
			},200);
		}
	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
	    this.offset = this.window.pageYOffset || 
	    	this.document.documentElement.scrollTop || 
	    	this.document.body.scrollTop || 
	    	0;
	    if (this.offset < 200) {
	    	this.isReachingTop = true;
	    } else {
	    	this.isReachingTop = false;
	    }
	}

}
