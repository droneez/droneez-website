import { Component } from '@angular/core';
import { Globals } from "./../../globals";
import { SeoService } from "./../../services/seo.service";

const seo:any = {
    title:"Contact - Une demande particulière, l'équipe Droneez est prête à vous répondre",
    schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
    meta: [
        {name: 'description', content: "L'équipe Droneez est prête à vous répondre sur toutes vos questions et si nous ne pouvons y répondre nous vous redirigerons vers les bons contacts !"},
        {property: 'og:type', content: "article"},
        {property: 'og:title', content: "Contact - Une demande particulière, l'équipe Droneez est prête à vous répondre"},
        {property: 'og:description', content: "L'équipe Droneez est prête à vous répondre sur toutes vos questions et si nous ne pouvons y répondre nous vous redirigerons vers les bons contacts !"},
        {property: 'og:url', content: "https://www.droneez.com/contact/"},
        {property: 'og:site_name', content: "Droneez"},
        {property: 'article:publisher', content: "https://www.facebook.com/droneez/"},
        {name: 'twitter:card', content: "summary_large_image"},
        {name: 'twitter:description', content: "L'équipe Droneez est prête à vous répondre sur toutes vos questions et si nous ne pouvons y répondre nous vous redirigerons vers les bons contacts !"},
        {name: 'twitter:title', content: "Contact - Une demande particulière, l'équipe Droneez est prête à vous répondre"},
        {name: 'twitter:site', content: "@DRONEEZ_fr"},
        {name: 'twitter:creator', content: "@DRONEEZ_fr"},
    ]
}

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  	
  	constructor(private globals: Globals, private seoService: SeoService) { }

  	ngOnInit() {
        this.seoService.setMetaDatas(seo.title,seo.meta,seo.schemaOrgContent);
        this.globals.noChangeNavBg = true;
  	}

    ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.seoService.removeMetaDatas(seo.meta);
    }

}
