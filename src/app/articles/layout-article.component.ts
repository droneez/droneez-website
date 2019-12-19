import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../services/window.service";
import { Globals } from "./../globals";
import { ActivatedRoute } from '@angular/router';
import { SeoService, SeoInterface } from "./../services/seo.service";
import { ArticlesService } from "./../services/articles.service";

@Component({
    selector: 'app-layout-article',
    templateUrl: './layout-article.component.html',
    styleUrls: ['./layout-article.component.scss']
})
export class LayoutArticleComponent {

    seo: SeoInterface;
	screenHeight:number = 0;
  	screenWidth:number = 0;
    article: any;

  	constructor(
        @Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) public window,
    	private globals: Globals,
        private route: ActivatedRoute,
        private seoService: SeoService,
        private articlesService: ArticlesService) {
    }

  	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
        this.articlesService
            .getArticleById(+this.route.snapshot.paramMap.get('id'))
            .subscribe((article)=>{
                this.article = article;
                this.seo = {
                    type: article.type,
                    imageUrl: article.media_folder_name + '/' + article.seo_image_name,
                    imageAlt: article.seo_image_alt,
                    imageType: article.seo_image_type,
                    title: article.title,
                    description: article.description,
                    keywords: article.keywords.split(','),
                    author: article.author,
                    published_time: article.published_time,
                    modified_time: article.modified_time,
                    section: article.section,
                    publisher: "https://www.facebook.com/droneez/"
                };
                this.seoService.setMetaDatas(this.seo);
            });
        
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.seoService.removeMetaDatas(this.seo);
  	}

	@HostListener('window:resize', []) onResize() {
      	this.screenHeight = this.window.innerHeight;
      	this.screenWidth = this.window.innerWidth;
  	}
}