import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { SeoService } from "./../../services/seo.service";

const seo:any = {
    title:"Wooploop - Droneez mets à disposition un fablab/coworking pour les pros du drone",
    schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
    meta: [
        {name: 'description', content: "Droneez pour pouvoir rendre accessible le monde du drone mets son 1er étage à disposition de start-up drones, télépilotes et expert du drone avec un fablab"},
		{property: 'og:locale', content: "fr_FR"},
		{property: 'og:type', content: "article"},
		{property: 'og:title', content: "Wooploop - Droneez mets à disposition un fablab/coworking pour les pros du drone"},
		{property: 'og:description', content: "Droneez pour pouvoir rendre accessible le monde du drone mets son 1er étage à disposition de start-up drones, télépilotes et expert du drone avec un fablab"},
		{property: 'og:url', content: "https://www.droneez.com/wooploop/"},
		{property: 'og:site_name', content: "Droneez"},
		{property: 'article:publisher', content: "https://www.facebook.com/droneez/"},
		{name: 'twitter:card', content: "summary_large_image"},
		{name: 'twitter:description', content: "Droneez pour pouvoir rendre accessible le monde du drone mets son 1er étage à disposition de start-up drones, télépilotes et expert du drone avec un fablab"},
		{name: 'twitter:title', content: "Wooploop - Droneez mets à disposition un fablab/coworking pour les pros du drone"},
		{name: 'twitter:site', content: "@DRONEEZ_fr"},
		{name: 'twitter:creator', content: "@DRONEEZ_fr"},
    ]
}

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
        @Inject(WINDOW) public window,
        private seoService: SeoService) { 
	}

	ngOnInit() {
		this.seoService.setMetaDatas(seo.title,seo.meta,seo.schemaOrgContent);
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
	}

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

    ngOnDestroy() {
        this.seoService.removeMetaDatas(seo.meta);
    }

}
