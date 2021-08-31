import { Component, HostListener, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { ImgCompressorService } from './../../services/img-compressor.service';
import { Globals } from "./../../globals";
import { ActivatedRoute } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { map, tap, expand } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeoService, SeoInterface } from "./../../services/seo.service";

const CLIENTS: string[] = ["Aduneo","Allianz","Alten","ArmatureTechnologies","Astek","Axione","BForBank","BlaBlaCar","Bouygues","BryanGarnier&Co","Cast","CheckPoint","Devoteam","Essilor","EulerHermes","Everside","Finaxys","Gemalto","IvaDrones","Kaibee","Kalidea","LaPoste","LisiAerospace","MarksSpencer","Momentys","Orange","Parrot","Rapid7","Renault","Rubel&Menasche","Safran","SchneiderElectric","SocieteGenerale","Sodexo","TheMachinery","Uavia","Volkswagen"];
const PARTNERS: string[] = [/*"DronesParisRegion",*/"StudioSport","FFAM","FPDC","DJI"];
const SUPPORTS: string[] = ["BPIFrance","FrenchTech","ReseauEntreprendre","BNPParibas"];

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    seo: SeoInterface;
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

    @ViewChild("businessSection", { static: true }) businessSectionElement: ElementRef;
    @ViewChild("clientsList", { static: false }) clientsListElement: ElementRef;
    @ViewChild("supportsList", { static: false }) supportsListElement: ElementRef;
    @ViewChild("partnersList", { static: false }) partnersListElement: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private seoService: SeoService,
        private compressor: ImgCompressorService
    ) {
        this.isIEorEdge = globals.isIE || globals.isEdge;
        this.clients = CLIENTS;
        this.supports = SUPPORTS;
        this.partners = PARTNERS;
        this.animLogo = false;
        this.seo = {
            type: 'website',
            imageUrl: "https://www.droneez-legacy.com/assets/img/cours-particuliers.jpg",
            imageAlt: "drone DJI 4k phantom 4 en plongée",
            imageType: "image/jpeg",
            title: "Découvrez le monde du drone en intérieur pour les pros et les amateurs",
            schemaOrgContent: [`{"@context":"https:\/\/schema.org","@type":"WebSite","@id":"https:\/\/www.droneez-legacy.com\/","url":"https:\/\/www.droneez-legacy.com\/","name":"Droneez"}`],
            description: "Un lieu d'apprentissage atypique et branché autour du monde du drone pour les particuliers - courses Freestyle, ou pour les professionnels - Certification Télépilote, Team Building, Coworking.",
            keywords: ["Technologie","FPV","Drone","Télépilotage","UAV","Piloter un drone","Future","Turfu","FFAM","FPDC","Science","Melting pot","Opensource","Team Building","Coworking"],
            videoUrl: "https://www.droneez-legacy.com/assets/img/video_homepage.mp4",
            videoType: "video/mp4",
            videoWidth: "1920",
            videoHeight: "1080"
        };
    }

    ngOnInit() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.metrics = [98,21,30];
        this.teambuildingMetric = 0;
        this.coworkerMetric = 0;
        this.eventMetric = 0;
        this.seoService.setMetaDatas(this.seo);
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
        this.seoService.removeMetaDatas(this.seo);
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
                this.openSnackBar("Le paiement a été accepté, vous allez recevoir un email avec le récapitulatif de votre commande.");
            };
        });
    }

    openSnackBar(message: string) {
        this.snackBar.open(message,"J'ai compris",{
            panelClass: "large"
        });
    }
}