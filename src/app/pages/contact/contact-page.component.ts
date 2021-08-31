import { Component } from '@angular/core';
import { Globals } from "./../../globals";
import { SeoService, SeoInterface } from "./../../services/seo.service";

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  	
    seo: SeoInterface;
    
  	constructor(private globals: Globals, private seoService: SeoService) { 
        this.seo = {
            type: 'article',
            imageUrl: "https://www.droneez-legacy.com/assets/img/business-event.jpg",
            imageAlt: "TeamBuilding et Evenement FPV pilotage de drone à distance en immersion",
            imageType: "image/jpeg",
            title: "Contact - Une demande particulière, l'équipe Droneez est prête à vous répondre",
            description: "L'équipe Droneez est prête à vous répondre sur toutes vos questions et si nous ne pouvons y répondre nous vous redirigerons vers les bons contacts !",
            keywords: ["FPV","Drone","Télépilotage","UAV","Piloter un drone","Team Building","Activités","équipes","Cohésion","Coworking","Vol","Pilote","Certification","DGAC","DSAC","professionnel","Drone Soccer","Drone roulant","fun","exceptionnel","bureau","soirée","licence3","conférence","présentation","DJI","Certification Télépilote"]
        };
    }

  	ngOnInit() {
        this.seoService.setMetaDatas(this.seo);
        this.globals.noChangeNavBg = true;
  	}

    ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.seoService.removeMetaDatas(this.seo);
    }

}
