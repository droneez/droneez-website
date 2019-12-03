import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { SeoService, SeoInterface } from "./../../services/seo.service";

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent {
    
    seo: SeoInterface;
	screenHeight:number = 0;
    screenWidth:number = 0;

	constructor(
		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private seoService: SeoService) { 
        this.seo = {
            type: 'article',
            imageUrl: "https://www.droneez.com/assets/img/business-event.jpg",
            imageAlt: "TeamBuilding et Evenement FPV pilotage de drone à distance en immersion",
            imageType: "image/jpeg",
            title: "La totale des offres Droneez pour les Entreprises",
            description: "Droneez fait découvrir le monde du drone pour les professionnels qui veulent passer le certificat, faire des team building, ou organiser des activités autour du drone.",
            keywords: ["FPV","Drone","Télépilotage","UAV","Piloter un drone","Team Building","Activités","équipes","Cohésion","Coworking","Vol","Pilote","Certification","DGAC","DSAC","professionnel","Drone Soccer","Drone roulant","fun","exceptionnel","bureau","soirée","licence3","conférence","présentation","DJI","Certification Télépilote"]
        };
	}

	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
        this.seoService.setMetaDatas(this.seo);
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.seoService.removeMetaDatas(this.seo);
    }

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

}
