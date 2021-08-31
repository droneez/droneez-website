import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { SeoService, SeoInterface } from "./../../services/seo.service";

@Component({
	selector: 'app-cowork-page',
	templateUrl: './cowork-page.component.html',
	styleUrls: ['./cowork-page.component.scss']
})
export class CoworkPageComponent {

	seo: SeoInterface;
    screenHeight:number = 0;
    screenWidth:number = 0;

	constructor(
		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private seoService: SeoService) { 
		this.seo = {
            type: 'article',
            imageUrl: "https://www.droneez-legacy.com/assets/img/cowork-bg.jpg",
            imageAlt: "Les bureaux du WoopLoop chez Droneez, espace de coworking autour du drone",
            imageType: "image/jpeg",
            title: "Wooploop - Droneez mets à disposition un fablab/coworking pour les pros du drone",
            description: "Droneez, pour pouvoir rendre accessible le monde du drone, met son 1er étage à disposition de start-up drones, télépilotes et expert du drone avec un fablab",
            keywords: ["Drone","Activités","équipes","Cohésion","Coworking","professionnel","fun","exceptionnel","bureau","soirée","conférence","présentation"]
       
        };
	}

	ngOnInit() {
		this.seoService.setMetaDatas(this.seo);
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
	}

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

    ngOnDestroy() {
        this.seoService.removeMetaDatas(this.seo);
    }

}
