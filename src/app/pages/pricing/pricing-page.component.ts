import { Component, OnInit } from '@angular/core';
import { Globals } from "./../../globals";
import { SeoService, SeoInterface } from "./../../services/seo.service";

@Component({
  	selector: 'app-pricing-page',
  	templateUrl: './pricing-page.component.html',
  	styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

    seo: SeoInterface;

  	constructor(private globals: Globals,private seoService: SeoService) {
        this.seo = {
            type: 'article',
            imageUrl: "https://www.droneez-legacy.com/assets/img/logo/logo-droneez.jpg",
            imageAlt: "Logo Droneez",
            imageType: "image/jpeg",
            title: "Tarifs et club FFAM",
            description: "Les différents tarifs proposés chez Droneez concernant nos services, prestations ou le Club FFAM",
            keywords: ["Drone","prix","tarif","Droneez","UAV","Télépilote","first step","Enseigner","Club","FFAM","Découverte","Premier Vol","Apprendre","Enseigner","prise en main","Fédération"]
        };
    }

  	ngOnInit() {
  		this.globals.noChangeNavBg = true;
        this.seoService.setMetaDatas(this.seo);
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.seoService.removeMetaDatas(this.seo);
    }

}

