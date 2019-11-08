import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';import { DOCUMENT } from "@angular/common";

@Injectable({
	providedIn: 'root'
})
export class SeoService {

	private renderer: Renderer2;

	constructor(
	  	@Inject(DOCUMENT) private document: Document,
	    private meta: Meta,
	    private title: Title,
	    private rendererFactory: RendererFactory2
	) {
		this.renderer = rendererFactory.createRenderer(null, null);
    }

    setMetaDatas(title:string,meta:any[], schemaOrgContent:string[]) {
    	for(let i = 0; i< schemaOrgContent.length ; i++){
    		let script = this.renderer.createElement('script');
	        script.type = `application/ld+json`;
	        script.text = schemaOrgContent[i];
	        this.renderer.appendChild(this.document.body, script);
    	}
        this.title.setTitle(title);
        this.meta.addTags(meta);
        this.createCanonicalUrl();
        /*{name: 'description', content: 'How to use Angular 4 meta service'},
        {name: 'author', content: 'talkingdotnet'},
        {name: 'keywords', content: 'Angular, Meta Service'},
        { rel: 'canonical', href: 'http://blogs.example.com/blah/nice' },
        { rel: 'alternate', hreflang: 'fr', href: 'https://www.droneez.com/decollage-en-toute-clairance/' }*/
        /*<link rel="alternate" type="application/rss+xml" title="Droneez » Flux" href="https://www.droneez.com/feed/">
        <link rel="alternate" type="application/rss+xml" title="Droneez » Flux des commentaires" href="https://www.droneez.com/comments/feed/">*/
    }

    createCanonicalUrl() {
        let link: HTMLLinkElement = this.renderer.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', this.document.URL);
        this.renderer.appendChild(this.document.head, link);
    }

    removeMetaDatas(meta:any[]) {
        this.title.setTitle('DroneezWebsite');
        for (let i=0; i < this.document.scripts.length; i++) {
           if (this.document.scripts[i].innerHTML.substr(0,32) === '{"@context":"https://schema.org"' ||
               this.document.scripts[i].innerHTML.substr(0,32) === 'undefined'){
               this.renderer.removeChild(this.document.body, this.document.scripts[i]);
           };
        }
        for (let i=0; i < this.document.head.children.length; i++) {
            let linkElement: HTMLLinkElement = this.document.head.children[i] as HTMLLinkElement;
            if (linkElement.rel === 'canonical'){
               this.renderer.removeChild(this.document.head, this.document.head.children[i]);
            };
        }
        meta.forEach((item) => {
            if(item.name) this.meta.removeTag('name="'+item.name+'"');
            if(item.property) this.meta.removeTag('property="'+item.property+'"');
        });
    }

    /*{name: 'description', content: 'Prêt au décollage... sortir son drone avec assurance et plan de vol !'},
    {name: 'author', content: 'Matt'},
    {name: 'keywords', content: 'décollage'},
    {property: 'og:locale', content: 'fr_FR'},
    {property: 'og:type', content: 'article'},
    {property: 'og:title', content: 'Décollage en toute Clairance - Droneez'},
    {property: 'og:description', content: 'Prêt au décollage... sortir son drone avec assurance et plan de vol !'},
    {property: 'og:url', content: 'https://www.droneez.com/decollage-en-toute-clairance/'},
    {property: 'og:site_name', content: 'Droneez'},
    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
    {property: 'article:section', content: 'home'},
    {property: 'article:published_time', content: '2019-02-12T15:03:53+02:00'},
    {property: 'article:modified_time', content: '2019-02-18T16:42:38+02:00'},
    {property: 'og:updated_time', content: '2019-02-18T16:42:38+02:00'},
    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2019/02/drone-1080844_1280.jpg'},
    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2019/02/drone-1080844_1280.jpg'},
    {property: 'og:image:width', content: '1280'},
    {property: 'og:image:height', content: '881'},
    {property: 'twitter:card', content: 'summary_large_image'},
    {property: 'twitter:description', content: 'Prêt au décollage... sortir son drone avec assurance et plan de vol !'},
    {property: 'twitter:title', content: 'Décollage en toute Clairance - Droneez'},
    {property: 'twitter:site', content: '@DRONEEZ_fr'},
    {property: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2019/02/drone-1080844_1280.jpg'},
    {property: 'twitter:creator', content: '@DRONEEZ_fr'}*/
}
