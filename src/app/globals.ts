import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./services/window.service";

@Injectable()
export class Globals {

	isOpera:boolean = false;
	isFirefox:boolean = false;
	isSafari:boolean = false;
	isIE:boolean = false;
	isEdge:boolean = false;
	isChrome:boolean = false;
	isBlink:boolean = false;

	/* Taille de la navbar du header */
	headerHeight: number = 64;
	/* permet d'empecher la transparence du fond de la navbar quand on atteind le haut de la page */
	noChangeNavBg: boolean = false;

	constructor(
		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window) {
		/* CHECK NAVIGATORS */
		try {
			// Opera 8.0+
		    //this.isOpera = (!!this.window['opr'] && !!opr.addons) || !!this.window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0;
		    // Firefox 1.0+
		    //this.isFirefox = typeof InstallTrigger !== 'undefined';
		    // Safari 3.0+ "[object HTMLElementConstructor]" 
		    //this.isSafari = /constructor/i.test(this.window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!this.window['safari'] || safari['pushNotification']);
		    // Internet Explorer 6-11
		    this.isIE = /*@cc_on!@*/false || !!this.document['documentMode'];
		    // Edge 20+
		    this.isEdge = !this.isIE && !!this.window['StyleMedia'];
		    // Chrome 1+
		    this.isChrome = !!this.window['chrome'] && !!this.window['chrome']['webstore'];
		    // Blink engine detection
		    this.isBlink = (this.isChrome || this.isOpera) && !!this.window['CSS'];
		} catch(e) {
			console.log(e);
		}
	}
	
}