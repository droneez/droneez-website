import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { SeoService } from "./../../services/seo.service";

const seo:any = {
    title:"A propos - Droneez de la découverte amateur à cette offre globale sur le drone",
    schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
    meta: [
        {name: 'description', content: "Droneez s'est lancé en voulant mettre le drone à la portée de tous sur le particulier et a étoffé son offre pour toucher tous les acteurs pros &amp; amateurs"},
        {property: 'og:locale', content: "fr_FR"},
        {property: 'og:type', content: "article"},
        {property: 'og:title', content: "Concept - Droneez de la découverte amateur à cette offre globale sur le drone"},
        {property: 'og:description', content: "Droneez s'est lancé en voulant mettre le drone à la portée de tous sur le particulier et a étoffé son offre pour toucher tous les acteurs pros &amp; amateurs"},
        {property: 'og:url', content: "https://www.droneez.com/concept/"},
        {property: 'og:site_name', content: "Droneez"},
        {property: 'article:publisher', content: "https://www.facebook.com/droneez/"},
        {name: 'twitter:card', content: "summary_large_image"},
        {name: 'twitter:description', content: "Droneez s'est lancé en voulant mettre le drone à la portée de tous sur le particulier et a étoffé son offre pour toucher tous les acteurs pros &amp; amateurs"},
        {name: 'twitter:title', content: "Concept - Droneez de la découverte amateur à cette offre globale sur le drone"},
        {name: 'twitter:site', content: "@DRONEEZ_fr"},
        {name: 'twitter:creator', content: "@DRONEEZ_fr"},
    ]
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

  	screenHeight:number = 0;
  	screenWidth:number = 0;

	constructor(
		@Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) public window,
    	private globals: Globals, private seoService: SeoService) { 
	}

	ngOnInit() {
    this.seoService.setMetaDatas(seo.title,seo.meta,seo.schemaOrgContent);
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
	}

	ngOnDestroy() {
        this.seoService.removeMetaDatas(seo.meta);  
        this.globals.noChangeNavBg = false;
  	}

  	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

}
