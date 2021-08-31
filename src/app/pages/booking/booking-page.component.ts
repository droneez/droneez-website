import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { SeoService, SeoInterface } from "./../../services/seo.service";

@Component({
	selector: 'app-booking-page',
	templateUrl: './booking-page.component.html',
	styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {

	screenHeight:number = 0;
    screenWidth:number = 0;
    seo: SeoInterface;

	constructor(
		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private seoService: SeoService,
    ) { 
        this.seo = {
            type: 'article',
            imageUrl: "https://www.droneez-legacy.com/assets/img/booking-pro-teambuilding.jpg",
            imageAlt: "Apprentissage pilote drone Droneez Malakoff",
            imageType: "image/jpeg",
            title: "Les Offres Droneez",
            description: "Un lieu d'apprentissage atypique et branché autour du monde du drone pour les particuliers - courses Freestyle, ou pour les professionnels - Certification Télépilote, Team Building, Coworking.",
            keywords: ["Drone","Piloter un drone","premier vol","Prise en main","Apprendre","Enseigner","Découverte","anniversaire","Cours collectifs","EVG","EVJF","Immersion","Prise de vue","UAV","Télépilote","FPV","immersion","stabilisé","acrobatique","Droneez","UAV","Télépilote","Particuliers"]
        };
    }

	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
        this.globals.noFooter = true;
        this.seoService.setMetaDatas(this.seo);
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.globals.noFooter = false;
        this.seoService.removeMetaDatas(this.seo);
    }

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }
}