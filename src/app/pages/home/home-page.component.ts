import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { LogoComponent } from "./../../components/logo/logo.component";

const CLIENTS: string[] = ["Allianz","Axione","BForBank","BlaBlaCar","BNP","gemalto","Kaibee","LaPoste","Orange"];
const PARTNERS: string[] = ["DroneParisRegion","StudioSport"];
const SUPPORTS: string[] = ["BPIFrance","FrenchTech"];

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    offset:number = 0;
    parallaxOffset:number = 0;
    screenHeight:number = 0;
    screenWidth:number = 0;
    isIEorEdge:boolean = false;
    partners: string[];
    clients: string[];
    supports: string[];
    animLogo: boolean;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals
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
    }

    /* Recuperation de l'offset de la page */
    @HostListener("window:scroll", []) onWindowScroll() {
        this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.parallaxOffset = this.offset * 0.8;
        //this.smoothScroll();
    }

    /* Pour le parallax de la video, son conteneur doit avoir la taille de la video après affichage */
    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }
}