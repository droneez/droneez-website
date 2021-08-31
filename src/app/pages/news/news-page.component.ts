import { Component, HostListener, Renderer2, ElementRef, Inject, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { ApiService } from './../../services/api.service';
import { Globals } from "./../../globals";
import { SeoService, SeoInterface } from "./../../services/seo.service";
import { ArticlesService, Article } from "./../../services/articles.service";
import { environment } from '../../../environments/environment';


@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements AfterViewInit {
    
    seo: SeoInterface;
    articles: Article[];
    showCardId:number;
    screenHeight:number = 0;
    offset:number = 0;
    @ViewChildren("card", {read: ElementRef}) cardList : QueryList<ElementRef>;
    colorArray = ['rgba(99,239,99,.4)','rgba(31,110,255,.4)','rgba(255,7,172,.4)']; // primary, secondary, danger --> colors
    randomColor = [];
    articlesFilesUrl: string;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private globals: Globals,
        private renderer: Renderer2,
        private apiService: ApiService,
        private seoService: SeoService,
        private articlesService: ArticlesService
        ) {
            this.articlesFilesUrl = environment.articlesFilesUrl;
            articlesService.getArticlesInfos().subscribe((data)=>{
                this.articles = data;
                this.randomizeColor();
                setTimeout(()=>{
                    this.showCard();
                },50);
                
            });
            /*apiService.getConfig().subscribe((data: Config) => {
                this.config = { ...data };
                this.config.urls.articlesUrls.forEach((articleUrl, index)=>{
                    this.articles[index].url = articleUrl;
                });
            })*/

            this.seo = {
                type: 'article',
                imageUrl: "https://www.droneez-legacy.com/assets/img/articles/covers/article_8.jpg",
                imageAlt: "Les pilotes Droneez",
                imageType: "image/jpeg",
                title: "Les actualités du drone selon les pilotes de notre centre Droneez",
                description: "Dans toutes les actualités drones, l'équipe Droneez mets en avant certains sujets en fonction de l'actualité pour l'avenir du drone !",
                keywords: ["Technologie","FPV","Drone","Télépilotage","UAV","Piloter un drone","Science","Actualités Drone","Droneez","UAV","Télépilote","Particuliers","FPV","Piloter","conduire"]
            };

        }

    ngAfterViewInit() {
        this.screenHeight = this.window.innerHeight;
        this.showCard();
    }

    ngOnInit() {
        this.seoService.setMetaDatas(this.seo);
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
        this.seoService.removeMetaDatas(this.seo);
    }

    @HostListener("window:scroll", []) onWindowScroll() {
        this.offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.showCard();
    }

    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.showCard();
    }

    randomizeColor() {
        let combi = {
            0: [this.colorArray[0],this.colorArray[1],this.colorArray[2]],
            1: [this.colorArray[2],this.colorArray[0],this.colorArray[1]],
            2: [this.colorArray[1],this.colorArray[2],this.colorArray[0]],
            3: [this.colorArray[1],this.colorArray[0],this.colorArray[2]],
            4: [this.colorArray[0],this.colorArray[2],this.colorArray[1]],
            5: [this.colorArray[2],this.colorArray[1],this.colorArray[0]]
        }
        let newIndex = 0;
        this.articles.forEach((item, index)=> {
            this.randomColor.push(combi[newIndex][index%3]);
            newIndex = index%3===2?newIndex+1:newIndex;
            newIndex = newIndex===6?0:newIndex;
        });
    }
}


