import { Component, HostListener, Renderer2, ElementRef, Inject, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { ApiService, Config } from './../../services/api.service';
import { Globals } from "./../../globals";

export interface articleInterface {
    id: number;
    date: Date;
    title: string; 
    abstract: string;
    cover: string;
    url: string;
};

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements AfterViewInit {

    articles:articleInterface[];
    showCardId:number;
    screenHeight:number = 0;
    offset:number = 0;
    @ViewChildren("card", {read: ElementRef}) cardList : QueryList<ElementRef>;
    config: Config;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private renderer: Renderer2,
        private apiService: ApiService
        ) {

            this.articles = this.getMockArticles();
            /*apiService.getConfig().subscribe((data: Config) => {
                this.config = { ...data };
                this.config.urls.articlesUrls.forEach((articleUrl, index)=>{
                    this.articles[index].url = articleUrl;
                });
            })*/

        }

    ngAfterViewInit() {
        this.screenHeight = this.window.innerHeight;
        this.showCard();
    }

    ngOnInit() {

        this.globals.noChangeNavBg = true;
        this.showCardId = 0;

    }

    showCard() {
        this.cardList.forEach((element, index)=>{
            let show = element.nativeElement.offsetTop < (this.offset + this.screenHeight - 150);
            if (show) {
                setTimeout( () => {
                    this.renderer.addClass(element.nativeElement, 'show-card');
                },100*(index%3),element);
            } else {
                setTimeout( () => {
                    this.renderer.removeClass(element.nativeElement, 'show-card');
                }, 100*(index%3),element);
            }
        })
    }

    ngOnDestroy() {
        this.globals.noChangeNavBg = false;
    }


    @HostListener("window:scroll", []) onWindowScroll() {
        this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.showCard();
    }

    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.showCard();
    }

    getMockArticles(): articleInterface[] {
        return [
            {id: 18, date: new Date('2019-02-12'), title: "Décollage en toute Clairance", abstract: "", cover: "article_19.jpg", url: "decollage-en-toute-clairance"},
            {id: 17, date: new Date('2019-02-06'), title: "Une école de pilotage aux portes de Paris chez DRONEEZ", abstract: "", cover: "article_18.png", url: "une-ecole-de-pilotage-aux-portes-de-paris-chez-droneez"},
            {id: 16, date: new Date('2018-07-30'), title: "France 3 présente DRONEEZ le 23 juillet à 19h", abstract: "", cover: "article_17.png", url: "france-3-presente-droneez-le-23-juillet-a-19h"},
            {id: 15, date: new Date('2018-07-23'), title: "Quoi de mieux qu'une animation Team Building drone ?", abstract: "", cover: "article_16.jpg", url: "quoi-de-mieux-qu-une-animation-team-building-drone"},
            {id: 14, date: new Date('2018-06-20'), title: "Le Wooplopp Droneez, l'espace de travail qui vous inspire !", abstract: "", cover: "article_15.jpg", url: "le-wooploop-droneez-l-espace-de-travail-qui-vous-inspire"},
            {id: 13, date: new Date('2018-06-11'), title: "Le drone... 1 article, plusieurs réponses !", abstract: "", cover: "article_14.jpg", url: "le-drone-1-article-plusieurs-reponses"},
            {id: 12, date: new Date('2018-05-02'), title: "Un petit tour en drone avec LA MAST", abstract: "", cover: "article_13.jpg", url: "un-petit-tour-en-drone-avec-la-mast"},
            {id: 11, date: new Date('2018-04-24'), title: "La première école de pilotage de drones à 5 minutes de Paris !", abstract: "", cover: "article_12.jpg", url: "pilotage-drones-paris"},
            {id: 10, date: new Date('2018-04-12'), title: "Lacement de Ryze TELLO chez DRONEEZ !", abstract: "", cover: "article_11.jpg", url: "dji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello"},
            {id: 9, date: new Date('2018-02-12'), title: "DRONEEZ au siège de La Poste pour 2 jours de pilotage de drone", abstract: "", cover: "article_10.png", url: "blog-droneez-au-siege-de-la-poste-2"},
            {id: 8, date: new Date('2018-02-12'), title: "DRONEEZ au Second Square Makers dans le Carreau du Temple", abstract: "", cover: "article_9.png", url: "blog-droneez-au-second-square-makers-dans-le-carreau-du-temple"},
            {id: 7, date: new Date('2018-02-09'), title: "DRONEEZ « A chaque histoire un début »", abstract: "", cover: "article_8.jpg", url: "blog-droneez-a-chaque-histoire-un-debut"},
            {id: 6, date: new Date('2018-02-09'), title: "DRONEEZ à la Médiatèque Nelson Mandela à Créteil !", abstract: "", cover: "article_7.png", url: "blog-droneez-a-la-mediatheque-nelson-mandela-a-creteil"},
            {id: 5, date: new Date('2018-02-09'), title: "Un pilote d'avion s'envole en drone", abstract: "", cover: "article_6.jpg", url: "blog-un-pilote-davion-senvole-en-drone"},
            {id: 4, date: new Date('2018-02-09'), title: "Un motard s'éclate à DRONEEZ !", abstract: "", cover: "article_5.jpg", url: "blog-un-motard-seclate-a-droneez"},
            {id: 3, date: new Date('2017-10-16'), title: "La réglementation des drones : Piloter en toute sécurité – Le Blog Droneez", abstract: "", cover: "article_4.png", url: "blog-la-reglementation-des-drones-piloter-en-toute-securite"},
            {id: 2, date: new Date('2017-10-16'), title: "DRONEEZ et ses bébés drones à VIVATECH", abstract: "", cover: "article_3.jpg", url: "droneez-et-ses-bebes-drones-a-vivatech"},
            {id: 1, date: new Date('2017-10-13'), title: "DRONEEZ à l'Urban Soccer d'Ivry", abstract: "", cover: "article_2.jpg", url: "droneez-a-lurban-soccer-divry"},
            {id: 0, date: new Date('2017-04-09'), title: "Droneez décroche la bourse French tech ! Fier d'être Droneez.", abstract: "", cover: "article_1.jpg", url: "droneez-decroche-la-bourse-french-tech-fier-d-etre-droneez"},
        ]
    }

}
