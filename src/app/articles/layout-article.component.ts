import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../services/window.service";
import { Globals } from "./../globals";
import { ActivatedRoute } from '@angular/router';
import { SeoService } from "./../services/seo.service";
import { ArticlesService } from "./../services/articles.service";

@Component({
  selector: 'app-layout-article',
  templateUrl: './layout-article.component.html',
  styleUrls: ['./layout-article.component.scss']
})
export class LayoutArticleComponent {

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
        //this.article = this.getArticle(+this.route.snapshot.paramMap.get('id'));
        this.articlesService
            .getArticleById(+this.route.snapshot.paramMap.get('id'))
            .subscribe((article)=>{
                this.article = article;
            });
        this.seoService.setMetaDatas(this.article.title,this.article.meta,this.article.schemaOrgContent);
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.seoService.removeMetaDatas(this.article.meta);
  	}

	@HostListener('window:resize', []) onResize() {
      	this.screenHeight = this.window.innerHeight;
      	this.screenWidth = this.window.innerWidth;
  	}
}