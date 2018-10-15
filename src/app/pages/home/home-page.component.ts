import { Component, HostListener, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    offset = 0;
    parallaxOffset = 0;
    screenHeight = 0;
    screenWidth = 0;

    @ViewChild('videoBackground') videoBackground: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window) {
    }

    ngOnInit() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

    /* Recuperation de l'offset de la page */
    @HostListener("window:scroll", []) onWindowScroll() {
        this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.parallaxOffset = this.offset * 0.8;
    }

    /* Pour le parallax de la video, son conteneur doit avoir la taille de la video après affichage */
    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }
}
