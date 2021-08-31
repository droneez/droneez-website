import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { SeoService, SeoInterface } from "./../../services/seo.service";

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

    seo: SeoInterface;
  	screenHeight:number = 0;
  	screenWidth:number = 0;

    constructor(
		@Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) public window,
    	private globals: Globals, 
        private seoService: SeoService
    ) { 
        this.seo = {
            type: 'article',
            imageUrl: "https://www.droneez-legacy.com/assets/img/about-steps-bg.jpg",
            imageAlt: "Piste Drone Paris",
            imageType: "image/jpeg",
            title: "A propos de la genèse de Droneez et de ses fondateurs",
            description: "Droneez s'est lancé en voulant mettre le drone à la portée de tous et a étoffé son offre pour toucher tous les acteurs pros et amateurs",
            keywords: ["Drone","Piloter un drone","Apprendre à conduire","premier vol","Prise en main","Drone","Apprendre","Enseigner","Découverte","Urban Soccer","Ivry","Nanterre","piste urban","Première salle"]
        };
	}

    ngOnInit() {
    	this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
        this.seoService.setMetaDatas(this.seo);
    }

    ngOnDestroy() {
        this.seoService.removeMetaDatas(this.seo); 
        this.globals.noChangeNavBg = false;
  	}

  	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }
}
