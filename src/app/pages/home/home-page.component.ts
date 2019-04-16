import { Component, HostListener, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SeoService } from "./../../services/seo.service";

const CLIENTS: string[] = ["Aduneo","Allianz","Alten","ArmatureTechnologies","Astek","Axione","BForBank","BlaBlaCar","Bouygues","BryanGarnier&Co","Cast","CheckPoint","Devoteam","Essilor","EulerHermes","Everside","Finaxys","Gemalto","IvaDrones","Kaibee","Kalidea","LaPoste","LisiAerospace","MarksSpencer","Momentys","Orange","Parrot","Rapid7","Renault","Rubel&Menasche","Safran","SchneiderElectric","SocieteGenerale","Sodexo","TheMachinery","Uavia","Volkswagen"];
const PARTNERS: string[] = ["DronesParisRegion","StudioSport","FFAM","FPDC","DJI"];
const SUPPORTS: string[] = ["BPIFrance","FrenchTech","ReseauEntreprendre","BNPParibas"];

const seo:any = {
    title:"Home - Découvrez le monde du drone en intérieur pour les pros et les amateurs",
    schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"WebSite","@id":"#website","url":"https:\/\/www.droneez.com\/","name":"Droneez","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.droneez.com\/?s={search_term_string}","query-input":"required name=search_term_string"}}','{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
    meta: [
        {name: 'description', content: 'Découvrez le drone de manière ludique pour le pilotage de course, le télépilotage amateur ou professionnelle ou encore pour des activités de team building.'},
        {property: 'og:locale', content: 'fr_FR'},
        {property: 'og:type', content: 'website'},
        {property: 'og:title', content: 'Home - Découvrez le monde du drone en intérieur pour les pros et les amateurs'},
        {property: 'og:description', content: 'Découvrez le drone de manière ludique pour le pilotage de course, le télépilotage amateur ou professionnelle ou encore pour des activités de team building.'},
        {property: 'og:url', content: 'https://www.droneez.com/'},
        {property: 'og:site_name', content: 'Droneez'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:description', content: 'Découvrez le drone de manière ludique pour le pilotage de course, le télépilotage amateur ou professionnelle ou encore pour des activités de team building.'},
        {name: 'twitter:title', content: 'Home - Découvrez le monde du drone en intérieur pour les pros et les amateurs'},
        {name: 'twitter:site', content: '@DRONEEZ_fr'},
        {name: 'twitter:creator', content: '@DRONEEZ_fr'},
    ]
}

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    offset:number = 0;
    parallaxOffset:number = 0;
    screenHeight:number = 0;
    screenWidth:number = 0;
    isIEorEdge:boolean = false;
    partners: string[];
    clients: string[];
    supports: string[];
    animLogo: boolean;
    metrics: number[];
    teambuildingMetric: number;
    coworkerMetric: number;
    eventMetric: number;
    interval: any;

    @ViewChild("businessSection") businessSectionElement: ElementRef;
    @ViewChild("clientsList") clientsListElement: ElementRef;
    @ViewChild("supportsList") supportsListElement: ElementRef;
    @ViewChild("partnersList") partnersListElement: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private seoService: SeoService
    ) {
        this.isIEorEdge = globals.isIE || globals.isEdge;
        this.clients = CLIENTS;
        this.supports = SUPPORTS;
        this.partners = PARTNERS;
        this.animLogo = false;
    }

    ngOnInit() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.metrics = [98,21,30];
        this.teambuildingMetric = 0;
        this.coworkerMetric = 0;
        this.eventMetric = 0;
        this.seoService.setMetaDatas(seo.title,seo.meta,seo.schemaOrgContent);
        setTimeout(()=>{
            this.getPaymentData();
        },100);
    }

    /* Recuperation de l'offset de la page */
    @HostListener("window:scroll", []) onWindowScroll() {
        this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

        this.parallaxOffset = this.offset * 0.8;

        this.counterMetrics();
        this.animLogoOnScroll(this.clientsListElement);
        this.animLogoOnScroll(this.supportsListElement);
        this.animLogoOnScroll(this.partnersListElement);
    }

    /* Pour le parallax de la video, son conteneur doit avoir la taille de la video après affichage */
    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

    ngOnDestroy() {
        this.seoService.removeMetaDatas(seo.meta);
    }

    /* animation des chiffres sur la section business*/
    counterMetrics() {
        if(this.businessSectionElement.nativeElement.offsetTop - 500 < this.offset) {
            if(!this.interval) {
                this.interval = setInterval(()=>{
                    this.teambuildingMetric = this.teambuildingMetric === this.metrics[0] ? this.teambuildingMetric : this.teambuildingMetric+1;
                    this.coworkerMetric = this.coworkerMetric === this.metrics[1] ? this.coworkerMetric : this.coworkerMetric+1;
                    this.eventMetric = this.eventMetric === this.metrics[2] ? this.eventMetric : this.eventMetric+1;
                    if(this.teambuildingMetric === this.metrics[0] && this.coworkerMetric === this.metrics[1] && this.eventMetric === this.metrics[2]) {
                        clearInterval(this.interval);
                        this.interval = undefined;
                    } 
                },25);
            }
        } else {
            this.teambuildingMetric = 0;
            this.coworkerMetric = 0;
            this.eventMetric = 0;
        };
    }

    animLogoOnScroll(el: ElementRef) {
        let list = el.nativeElement.children;
        let speed = 15;
        if(el.nativeElement.offsetTop -600 < this.offset) {
            for (let i=0; i < list.length;i++) {
                setTimeout(()=>{
                    list[i].style.opacity = 1;
                    list[i].style.transform = "scale3d(1,1,1)";
                },i*speed);
            }
        } else {
            for (let i=0; i < list.length;i++) {
                setTimeout(()=>{
                    list[i].style.opacity = 0;
                    list[i].style.transform = "scale3d(0,0,1)";
                },i*speed);
            }
        }
    }

    getPaymentData() {
        this.route.queryParamMap.pipe(
            map(params => params.get('payment')),
            tap((res) => {
                if(res!= null) console.log('fetched payment result');
            })
        ).subscribe((res)=>{
            if(res !== null && +res === 0) {
                this.openSnackBar("Le paiement a été refusé");
            } else if(+res === 1){
                this.openSnackBar("La paiement a été accepté, vous allez recevoir un email avec le récapitulatif de votre commande.");
            };
        });
    }

    openSnackBar(message: string) {
        this.snackBar.open(message,"J'ai compris",{
            panelClass: "large"
        });
    }
}