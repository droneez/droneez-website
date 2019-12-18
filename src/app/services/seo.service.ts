import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from "@angular/common";

export interface SeoInterface {
    title: string;
    keywords: string[];
    type: string;
    imageUrl: string;
    imageAlt: string;
    imageType: string;
    description: string;
    schemaOrgContent?: string[]; 
    metas?: any[]; 
    videoUrl?: string;
    videoWidth?: string;
    videoHeight?: string;
    videoType?: string;
}

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

    /**
        Titre: 70 caractères
        Description: 200 caractères
        Image: Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported.
    */
    setTwitterDatas(title:string,description:string,imgUrl:string,imgAlt:string) {
       let metas:any = [
            {name: 'twitter:card', content: "summary_large_image"},
            {name: 'twitter:site', content: "@DRONEEZ_fr"},
            {name: 'twitter:creator', content: "@DRONEEZ_fr"},
            {name: 'twitter:title', content: title},
            {name: 'twitter:description', content: description},
            {name: 'twitter:image', content: imgUrl},
            {name: 'twitter:image:alt', content: imgAlt}
        ];
        this.meta.addTags(metas);
    }

    removeTwitterDatas() {
        this.meta.removeTag('name="og:card"');
        this.meta.removeTag('name="og:site"');
        this.meta.removeTag('name="og:creator"');
        this.meta.removeTag('name="og:title"');
        this.meta.removeTag('name="og:description"');
        this.meta.removeTag('name="og:image"');
    }

    setOpenGraphDatas(seo: SeoInterface){
        let metas:any = [
            {property: 'og:site_name', content: "Droneez"},
            {property: 'og:locale', content: "fr_FR"},
            {property: 'og:url', content: this.document.URL},
            {property: 'og:type', content: seo.type},
            {property: 'og:title', content: seo.title},
            {property: 'og:description', content: seo.description},
            {property: 'og:image', content: seo.imageUrl},
            {property: 'og:image:secure_url', content: seo.imageUrl},
            {property: "og:image:type", content: seo.imageType}
        ]

        if(seo.type === "article") {
            /*metas.push({property: 'article:published_time', content: });
            metas.push({property: 'article:modified_time', content: });
            metas.push({property: 'article:author', content: });
            metas.push({property: 'article:section', content: });
            metas.push({property: 'article:tag', content: });
            
            metas.push({property: 'og:updated_time', content: });*/  //idem a modified_time
            metas.push({property: 'article:tag', content: seo.keywords.join(", ")});
            metas.push({property: 'article:publisher', content: 'https://www.facebook.com/droneez/'});
        }
        /*
        article:published_time - datetime - When the article was first published.
        article:modified_time - datetime - When the article was last changed.
        article:author - profile array - Writers of the article.
        article:section - string - A high-level section name. E.g. Technology
        article:tag - string array - Tag words associated with this article.

        */
        //{property: 'og:updated_time', content: '2019-02-18T16:42:38+02:00'}
        if (seo.videoUrl) {
            metas.push({property: 'og:video', content: seo.videoUrl});
            metas.push({property: "og:video:secure_url", content: seo.videoUrl});
            if(seo.videoType) metas.push({property: "og:video:type", content: seo.videoType});
            if(seo.videoWidth) metas.push({property: 'og:video:width', content: seo.videoWidth});
            if(seo.videoHeight) metas.push({property: 'og:video:height', content: seo.videoHeight});
        }

        let img = new Image();
        img.onload = ()=>{
            metas.push({property: 'og:image:width', content: '' + img.width});
            metas.push({property: 'og:image:height', content: '' + img.height});
            this.meta.addTags(metas);
        };
        img.src = seo.imageUrl;
    }

    removeOpenGraphDatas(seo: SeoInterface) {
        this.meta.removeTag('property="og:site_name"');
        this.meta.removeTag('property="og:locale"');
        this.meta.removeTag('property="og:url"');
        this.meta.removeTag('property="og:type"');
        this.meta.removeTag('property="og:title"');
        this.meta.removeTag('property="og:description"');
        this.meta.removeTag('property="og:image"');
        this.meta.removeTag('property="og:image:secure_url"');
        this.meta.removeTag('property="og:image:width"');
        this.meta.removeTag('property="og:image:height"');
        this.meta.removeTag('property="og:image:type"');
        if(seo.videoUrl) {
            this.meta.removeTag('property="og:video"');
            this.meta.removeTag('property="og:video:secure_url"');
            if(seo.videoType) this.meta.removeTag('property="og:video:type"');
            if(seo.videoWidth) this.meta.removeTag('property="og:video:width"');
            if(seo.videoHeight) this.meta.removeTag('property="og:video:height"');
        }
        if(seo.type === "article") {
            this.meta.removeTag('property="article:publisher"');
        }
    }

    setSchemaOrgDatas(seo: SeoInterface) {
        let schemaOrgContent = [
            `{
                "@context":"https:\/\/schema.org",
                "@type":"Organization",
                "url":"https:\/\/www.droneez.com\/",
                "sameAs":[
                    "https:\/\/www.facebook.com\/droneez\/",
                    "https:\/\/www.instagram.com\/droneez_paris\/",
                    "https:\/\/twitter.com\/DRONEEZ_fr"
                ],
                "@id":"https:\/\/www.droneez.com\/#organization",
                "name":"Droneez",
                "logo":"https:\/\/www.droneez.com\/assets\/img\/logo\/Logo-droneez.jpg"
            }`
            /*
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+1-800-692-7753",
                        "contactType": "sales",
                        "areaServed": [ "FR" ]
                        "email": "mailto:jane-doe@xyz.edu"
                    }
                ],
                "location": {
                    "@type": "Place",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Philadelphia",
                      "addressRegion": "PA"
                    },
                    "url": "wells-fargo-center.html"
                  },
                "location": {
                    ...
                  },
                  "email": "mailto:jane-doe@xyz.edu",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Seattle",
                    "addressRegion": "WA",
                    "postalCode": "98052",
                    "streetAddress": "20341 Whitworth Institute 405 N. Whitworth"
                  }
            */
        ];

        if(seo.schemaOrgContent){
            schemaOrgContent = schemaOrgContent.concat(seo.schemaOrgContent);
        }

        for (let i = 0; i< schemaOrgContent.length ; i++) {
            let script = this.renderer.createElement('script');
            script.type = `application/ld+json`;
            script.text = schemaOrgContent[i];
            this.renderer.appendChild(this.document.body, script);
        }
    }

    removeSchemaOrgDatas() {
        for (let i=0; i < this.document.scripts.length; i++) {
           if (this.document.scripts[i].innerHTML.substr(0,32) === '{"@context":"https://schema.org"' ||
               this.document.scripts[i].innerHTML.substr(0,32) === 'undefined'){
               this.renderer.removeChild(this.document.body, this.document.scripts[i]);
           };
        }
    }

    createCanonicalUrl() {
        let link: HTMLLinkElement = this.renderer.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', this.document.URL);
        this.renderer.appendChild(this.document.head, link);
    }

    removeCanonicalUrl() {
        for (let i=0; i < this.document.head.children.length; i++) {
            const linkElement: HTMLLinkElement = this.document.head.children[i] as HTMLLinkElement;
            if (linkElement.rel === 'canonical'){
               this.renderer.removeChild(this.document.head, this.document.head.children[i]);
            };
        }
    }

    setMetaDatas(seo: SeoInterface) {
        this.title.setTitle(seo.title);
        this.createCanonicalUrl();
        this.setSchemaOrgDatas(seo);
        this.setOpenGraphDatas(seo);
        this.setTwitterDatas(seo.title,seo.description,seo.imageUrl,seo.imageAlt);

        this.meta.addTag({name: 'description', content: seo.description});
        this.meta.addTag({name: 'keywords', content: seo.keywords.join(", ")});
        if( seo.metas ) {
            this.meta.addTags(seo.metas);
        }
        
        /*{name: 'author', content: 'talkingdotnet'},
        { rel: 'alternate', hreflang: 'fr', href: 'https://www.droneez.com/decollage-en-toute-clairance/' }*/
        /*<link rel="alternate" type="application/rss+xml" title="Droneez » Flux" href="https://www.droneez.com/feed/">
        <link rel="alternate" type="application/rss+xml" title="Droneez » Flux des commentaires" href="https://www.droneez.com/comments/feed/">*/
    }

    removeMetaDatas(seo: SeoInterface) {
        this.title.setTitle('DroneezWebsite');
        this.removeSchemaOrgDatas();
        this.removeTwitterDatas();
        this.removeOpenGraphDatas(seo);
        this.removeCanonicalUrl();

        if(seo.metas){
            seo.metas.forEach((item) => {
                if(item.name) this.meta.removeTag('name="'+item.name+'"');
                if(item.property) this.meta.removeTag('property="'+item.property+'"');
            });
        }
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


/*
<meta property="og:title" content="Article sur l'Open Graph par Yakaferci" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.yakaferci.com/open-graph/" />
<meta property="og:image" content="http://www.yakaferci.com/images/yakaferci_small.jpg" />

*/

/* schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"WebSite","@id":"#website","url":"https:\/\/www.droneez.com\/","name":"Droneez","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.droneez.com\/?s={search_term_string}","query-input":"required name=search_term_string"}}'],
*/

