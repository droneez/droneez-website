import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../services/window.service";
import { Globals } from "./../globals";
import { ActivatedRoute } from '@angular/router';
import { SeoService } from "./../services/seo.service";

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
        private seoService: SeoService) {
    }

  	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
        this.article = this.getArticle(+this.route.snapshot.paramMap.get('id'));
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

    getArticle(id: number) {
        let articles = [{
                id: 20,
                title: 'Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet',
                content:
                    `<article id="post-3095" class="article-custom vertical-fancy-style post-3095 post type-post status-publish format-standard has-post-thumbnail category-culture category-home category-79 category-36 description-off">
                    <div class="post-thumbnail position-relative"><div class="fancy-date"><a title="15 h 03 min" href="https://www.droneez.com/2019/02/12/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">12</span><span class="entry-year">2019</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/1_PHOTOCOUVCORSAIR.jpg" width="1280" height="640" title="drone-1080844_1280" alt="" srcset="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/1_PHOTOCOUVCORSAIR.jpg" style="will-change: auto;"></div>
                    <div class="text-center title-custom title-custom-2">Un drone Racer pour les prises de vue Professionnelle !<br /> Une révolution au vu des vidéos qui circulent sur internet</div>
                    <div class="entry-content"><p style="text-align: center;">Nous avons parlé précédemment des règles de l’air et des lois conformes à la DGAC, Direction Générale de l’Aviation Civile. Pour la sécurité des personnes, des tiers & la réglementation des zones de vol et des paliers pour chaque type d’aéronef, tous les pilotes doivent respecter ces lois pour que la sécurité de chacun soit assurée.</p>
                    <p>Les professionnels peuvent décoller sous acceptation de leur plan de vol à la DGAC ou DSAC ainsi que la préfecture de Police Locale & les aérodromes/aéroports à proximité, ces derniers doivent soumettre un plan de vol selon 4 scénarii possibles dont nous avons d’ores & déjà parlé, voici un résumé des définitions de celles-ci que l’on retrouve dans le manuel Mermoz pour passer la partie théorique de la licence de Télépilote :</p>
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/Mermoz - S1.png" alt="" width="600" height="300"></h2>
                    <p><strong>S1 : Drones de moins de 25kg :</strong><p/>
                    <ul>
                    <li>Hauteur Maximum : 150m</li>
                    <li>Distance horizontale maximum : 200m</li> 
                    <li>Zone non peuplée</li> 
                    <li>Vol à vue</li> 
                    </ul>
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/Mermoz - S2.png" alt="" width="600" height="300"></h2>
                    <p><strong>S2 :</strong></p>
                    <ul>
                    <li>Hauteur Maximum : 150m (<= à 2kg) / 50m (entre 2kg & 150kg)</li>
                    <li>Distance horizontale maximum : 1000m</li> 
                    <li>Zone non peuplée</li> 
                    <li>Vol FPV</li> 
                    </ul>
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/Mermoz - S3.png" alt="" width="600" height="300"></h2>
                    <p><strong>S3 :</strong></p>
                    <ul>
                    <li>Hauteur Maximum : 150m (<= à 8kg)</li>
                    <li>Distance horizontale maximum : 100m</li> 
                    <li>Zone peuplée</li> 
                    <li>Vol à vue</li> 
                    </ul> 
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/Mermoz - S4.png" alt="" width="600" height="300"></h2>
                    <p><strong>S4 :</strong></p>
                    <ul>
                    <li>Hauteur Maximum : 150m (<= à 8kg)</li>
                    <li>Distance horizontale maximum : Infini</li> 
                    <li>Zone non peuplée</li> 
                    <li>Vol FPV</li> 
                    </ul>
                    <p>Les vols en dehors de ces types de scenarii seront soumis à l’autorisation spécifique de la DGAC, échelon centrale. Lors de votre suivi de vol dans votre Manuel d’Activités Particulières, vous devez utiliser des drones qui ont été validé par l’OACI, l’Organisation de l’Aviation Civile Internationale, et qui suivent les protocoles & tests de fiabilité et de sécurité.
                    L’attestation de conception est nécessaire pour les scénarii S3 (>2kg), S2 et S4 ; pour les scenarii S1 & S3 (<2kg) cette dernière n’est pas requise cependant cela ne veut pas dire que les n’importe quel drone peut être utilisé. En effet, selon <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000037019354&dateTexte=&categorieLien=id">l’arrêté de conception</a> publié en 2015, et donc doit répondre aux indications suivantes :</p>
                    <ul>
                    <li>Indication de l’altitude ou hauteur (via un baromètre altimétrique)</li>
                    <li>Conformité des fréquences radio (réception & emission) & les puissances d’émission conformes à la législation en vigueur</li> 
                    <li>Système de limitation de la hauteur ou de l’altitude</li> 
                    <li>Système de coupure des moteurs en cas de danger</li>
                    <li>Le drone doit comporter une fonction Failsafe qui déclenche un atterrissage d’urgence si ce dernier perds le signal de la liaison radio</li>
                    </ul>
                    <p>En plus de cela la mise en conformité nécessite un suivi de l’entretien de l’aéronef sans personnes à bords et un manuel d’utilisation qui sont nécessaires pour un drone de ce type d’après l’arrêté de conception cité précédemment.</p>
                    <p>Forcément on se dit que pour valider son racer, ça commence à être compliqué… la législation évolue et de nombreux pilotes professionnels dont vous avez pu voir les incroyables vidéos comme TomZ pour Redbull ou encore Fincky peuvent mettre au point des drones spécifiques à chaque demande.</p>
                    <p>Cependant nous ne sommes pas tous aussi doués que ces pilotes pour la conception de drones…
                    Nous collègues de Studiosport ont décidé de pouvoir mettre ce type de drone racer pour la prise de vue professionnelle conforme aux scenarii S1 et S3 à la portée de tous… Nous vous présentons donc le CORSAIR !</p> 
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/2_PHOTOCORSAIR.jpg" alt="" width="1920" height="960"></h2>
                    <ul>
                    <li>Châssis : PiratFrame Corsair squiched - conception unique en collaboration avec studioSPORT</li>
                    <li>Motorisation : Set de 4 moteurs T-Motor F40 Pro-III 1600 kV</li> 
                    <li>ESC : T-Motor F55A Pro II 4-en-1</li> 
                    <li>Contrôleur de vol : YupiF7 avec GPS et baromètre</li>
                    <li>Support incliné à 28° pour GoPro Hero 7 (autres supports vendus séparément)</li>
                    <li>Caméra FPV : Foxeer Predator V4</li> 
                    <li>Émetteur vidéo : TBS Unify Pro HV 5.8GHz</li> 
                    <li>Antenne vidéo : TBS Triumph</li> 
                    <li>Récepteur radio : TBS Crossfire ou FrSky R-XSR</li> 
                    <li>Hélices : 4 AzurPower 6145 tripales</li> 
                    <li>Valise : B&W avec mousse prédécoupée avec emplacements batteries et hélices</li>  
                    </ul>
                    <p>Sur cette base il faudra aussi fixer une caméra HD type GoPro Hero7 pour réaliser ces prises de vue car le matériel est fourni comme base pour le pilotage et il faut rajouter le matériel de prise de vue, les batteries (5 à 6S – Le drone pèse un peu quand même), une manette compatible & des lunettes de réceptions (Fatshark, Eachine, Orqa) avec un récepteur vidéo type Rapidfire ou Crossfire ainsi que tous les outils pour être conformes à la législation (Rubalise, piste de décollage, gilets etc.)</p>
                    <p>Le Prix, une chose importante en effet, <a href="https://www.studiosport.fr/racer-corsair-s1-s3-studiosport-a17684.html">1699€ TTC</a> chez Studiosport et avec tout le matériel nécessaire on peut compter 2500€ TTC à 3000€ TTC avec des batteries supplémentaires pour la réalisation de vos tournages.</p> 
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Un drone Racer pour les prises de vue Professionnelle ! Une révolution au vu des vidéos qui circulent sur internet/3_PHOTOCORSAIR.jpg" alt="" width="1920" height="960"></h2>
                    <p>Pour le commun des mortels cela peut paraître cher mais la validation est un travail fastidieux et le résultat est assez incroyable en termes de matériel. Maintenant c’est à vous de vous entraîner pour piloter ce type de racer est donner des résultats de vidéos à grande vitesse et au plus proche de votre cible.</p>
                    <p>Toutefois on n’oublie pas que la prise de vue professionnelle d’un aéronef sans personnes à bord est réglementée et que le Corsair ne vous octroie pas la permission de passer outre cette législation.</p>
                    <p>&nbsp;</p>
                    <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu <a href="https://www.droneez.com/">DRONEEZ</a>&nbsp;nous vous invitons à&nbsp;liker&nbsp;</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                    <p>&nbsp;</p>
                    <div class="end" style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                    <div class="end" style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                    <p>&nbsp;</p>
                    </div><!--<div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2019/02/12/" title="15 h 03 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2019-02-12T15:03:53+00:00">12 février 2019</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;t=D%C3%A9collage+en+toute+Clairance" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;text=D%C3%A9collage+en+toute+Clairance" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;title=D%C3%A9collage%20en%20toute%20Clairance&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=D%C3%A9collage%20en%20toute%20Clairance%20-%20https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;title=D%C3%A9collage+en+toute+Clairance" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div>--></div>
                    </article>`,
                meta: [
                        /*{name: 'description', content: 'Prêt au décollage... sortir son drone avec assurance et plan de vol !'},
                        {name: 'author', content: 'Matt'},
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
                ],
                schemaOrgContent: [/*'{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'*/],
                url: 'un-drone-racer-pour-les-prises-de-vue-professionnelle'
            },
            {
                id: 19,
                title: 'TEMOIGNAGE DE LUCA BOZZI - Un italien fou de drone',
                content:
                    `<article id="post-3095" class="vertical-fancy-style post-3095 post type-post status-publish format-standard has-post-thumbnail category-culture category-home category-79 category-36 description-off">
                    <div class="post-thumbnail position-relative"><div class="fancy-date"><a title="15 h 03 min" href="https://www.droneez.com/2019/06/12/" rel="nofollow"><span class="entry-month">Juin</span><span class="entry-date updated">12</span><span class="entry-year">2019</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/TEMOIGNAGE DE LUCA BOZZI - Un italien fou de drone/20190604 - Luca_2 (2).jpg" width="600" height="300" title="drone-1080844_1280" alt="" srcset="assets/img/articles/TEMOIGNAGE DE LUCA BOZZI - Un italien fou de drone/20190604 - Luca_2 (2).jpg" style="will-change: auto;"></div><div class="entry-content position-relative">
                    <div class="text-center title-custom">TEMOIGNAGE DE LUCA BOZZI <br /> Un italien fou de drone</div>
                    <h2 style="text-align: center;"><strong> Luca Bozzi est un comédien et vidéaste italien, arrivé à Paris en 2006 à l’âge de 25 ans, il tombe amoureux de la beauté de notre capitale et décide de s’y installer. Passionné de photographies et de vidéos il voit rapidement dans le drone une manière de repousser les limites des prises de vues. Voici son témoignage :</strong></h2>
                    <p><strong>Ton accent te trahit immédiatement Luca, d’où viens-tu ? Et comment est-ce que tu t’es retrouvé à Paris ?</strong></p>
                    <p>Je suis originaire de Livourne en Italie mais je vis en France depuis 13 ans. A la fois Réalisateur, photographe et comédien, je travaille surtout pour l’amour de l’image et du scénario.</p>
                    <p>Je suis venu à Paris pour suivre les cours de l’Académie internationale des arts du spectacle où j’ai pu aborder plusieurs domaines des métiers de l’art. J’ai aussi suivis différents cours en ligne comme celui de l’école Les Gobelins ou avec Parker WALLBACK un vidéaste américain, pour en apprendre plus sur les prises de vues de différents domaines : immobilier, événement, backstage, entreprises.</p>
                    <p><strong>Tu as une triple passion, la photo, la vidéo et la comédie, tu peux nous en dire plus ? </strong>   </p>
                    <p>J’accompagne les professionnels dans la réalisation de films et photos promotionnelles d’entreprises, conférences, trailers, interview, théâtre ou spectacles ; imposant le rythme et l’esthétisme nécessaire à la valorisation des individus et des moments partagés, comme j’aime à le répéter : Le sourire est la cause et non l’effet du bonheur.
                    Mon crédo c’est de diffuser ma bonne humeur et mon expérience de la scène avec mes clients pour les mettre à l’aise devant l’objectif. </p>
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/TEMOIGNAGE DE LUCA BOZZI - Un italien fou de drone/20190604 - Luca_1.png" alt="" width="400" height="200"></h2>
                    <p><strong>Comment t’es venue l’idée de faire du drone ? </strong>    </p>
                    <p>Je me suis passionné pour le drone il y a 2 ans.
                    Après avoir vu quelles perspectives on pouvait donner aux photos et aux vidéos, le drone m’a tout de suite intéressé car il apportait de nouvelles formes d’images et de nouveaux horizons. </p>
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/TEMOIGNAGE DE LUCA BOZZI - Un italien fou de drone/20190604 - Luca_3.jpg" alt="" width="1920" height="960"></h2>
                    <p><strong>Tu sais s’il y a beaucoup de télépilotes en Italie ? </strong>   </p>
                    <p>Je sais qu’il y a pas mal des telepilotes en Italie, notamment pour le loisir.
                    Même si les règles sont moins strictes qu’en France, il faut quand même avoir un brevet pour piloter en ville et selon le poids du drone. </p>
                    <p><strong>Tu faisais déjà du drone avant de passer la formation, qu’est-ce que la formation t’a apportée de plus (à part pouvoir officialiser ton activité) ? </strong>    </p>
                    <p>Avant de suivre la formation j’avais déjà fait une cinquantaine d’heures en loisir, mais la formation (financée par Pole Emploi) m’as permis de maitriser encore mieux les mouvements du drone, d’être moins stressé lors de mes vols et surtout d’avoir une vision globale de l’environnement et pas seulement du drone, maintenant je sais comment réaliser une mission en toute sécurité.
                    Aujourd’hui le rendu final de mes photos et vidéos est bien plus joli :-).</p>
                    <p><strong>Le français n’est pas ta langue maternelle, même si tu le parles exceptionnellement bien ; cela a du rajouter une difficulté supplémentaire pour l’examen théorique, non ? </strong>    </p>
                    <p>L’examen théorique (le QCM de 60 questions) était la chose qui me faisait le plus peur !
                    Je me suis préparé pendant 3 mois sur des QCM blancs au moins 1h par jour, avec parfois des sujets dont je ne connaissais même pas l’existence auparavant et en plus dans une autre langue.
                    Au final avec persévérance : j’ai réussi mon examen du premier coup avec la note très honorable de 50 sur 60. </p>
                    <p><strong>Un dernier mot pour la fin ? </strong>   </p>
                    <p>Je remercie Droneez pour leur accueil, leur gentillesse, leur pédagogie et leur bonne humeur à chaque jour du stage. </p>
                    <p><strong>Merci Luca pour ton retour et voici le lien vers le site internet de Luca si vous souhaitez faire appel à lui : <a href="https://www.luchinofilmmaker.com/photos">https://www.luchinofilmmaker.com/photos</a></strong>   </p>
                    <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/TEMOIGNAGE DE LUCA BOZZI - Un italien fou de drone/20190604 - Luca_4.jpg" alt="" width="1920" height="960"></h2>
                    <p>&nbsp;</p>
                    <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu <a href="https://www.droneez.com/">DRONEEZ</a>&nbsp;nous vous invitons à&nbsp;liker&nbsp;</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                    <p>&nbsp;</p>
                    <div class="end" style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                    <div class="end" style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                    <p>&nbsp;</p>
                    <!--</div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2019/06/12/" title="15 h 03 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2019-06-12T15:03:53+00:00">12 Juin 2019</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;t=D%C3%A9collage+en+toute+Clairance" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;text=D%C3%A9collage+en+toute+Clairance" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;title=D%C3%A9collage%20en%20toute%20Clairance&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=D%C3%A9collage%20en%20toute%20Clairance%20-%20https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;title=D%C3%A9collage+en+toute+Clairance" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>-->
                    </article>`,
                meta: [
                        /*{name: 'description', content: 'Prêt au décollage... sortir son drone avec assurance et plan de vol !'},
                        {name: 'author', content: 'Matt'},
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
                ],
                schemaOrgContent: [/*'{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'*/],
                url: 'un-italien-fou-de-drone'
            },
            {
                id: 18,
                title: 'Décollage en toute Clairance - Droneez',
                content:
                    `<article id="post-3095" class="vertical-fancy-style post-3095 post type-post status-publish format-standard has-post-thumbnail category-culture category-home category-79 category-36 description-off">
                    <div class="post-thumbnail"><div class="fancy-date"><a title="15 h 03 min" href="https://www.droneez.com/2019/02/12/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">12</span><span class="entry-year">2019</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Décollage en toute Clairance - Droneez_files/drone-1080844_1280.jpg" width="1280" height="640" title="drone-1080844_1280" alt="" srcset="assets/img/articles/Décollage en toute Clairance - Droneez_files/drone-1080844_1280.jpg" style="will-change: auto;"></div><div class="entry-content"><p style="text-align: center;">Organisme de formation agréé DGAC depuis 2018, nous avons remarqué que nos apprentis télépilotes se posaient de nombreuses questions. Notamment concernant l’assurance de leur activité drone et les autorisations de décollage.</p>
                    <p style="text-align: center;">Alors nous avons retroussés nos manches et tentez de répondre à ces besoins.</p>
                    <h2 style="text-align: center;"><strong>Première réponse : Couvrez-vous bien&nbsp;!</strong></h2>
                    <p style="text-align: center;">A titre de loisir les assurances sont aujourd’hui à jour et peuvent vous proposer d’ajouter votre activité drone à votre assurance Responsabilité Civile (souvent inclus dans votre assurance habitation) pour quelques dizaines d’euros par an.</p>
                    <p style="text-align: center;">Pour les pilotes professionnelles la tâche est plus ardue, et il faudra parfois s’armer de patience car les assurances ne sont pas toutes bien rodées aux risques du métier.</p>
                    <p style="text-align: center;">Pour vous donner une idée nous a proposé des devis allant de 150 à 450 € par an. Cela pour des activités de télépilotes de drone ou de photographe utilisant un seul drone. Certaines assurances cette nuance peut beaucoup changer le devis et la compréhension du conseillé.</p>
                    <p style="text-align: center;">Il existe bien sur des assurances spécialisées qui vous approcherons sans doute très rapidement dès que vous aurez ajouté la mention «&nbsp;télépilote&nbsp;» sur votre profil LinkedIn.</p>
                    <p style="text-align: center;">A vous de faire le tri.</p>
                    <h3 style="text-align: center;">Une bonne nouvelle dans un futur proche…</h3>
                    <p style="text-align: center;">Dans un futur «&nbsp;proche&nbsp;», nous serons en mesure de vous mettre en contact avec une assurance (de renom) qui pourra vous faire un contrat adaptés à vos besoins de télépilotes, et qui sera à votre écoute sur votre travail au quotidien.</p>
                    <p style="text-align: center;">Dès que ce sera prêt vous en serez bien sûr informés…&nbsp;avec une nouvelle intéressante pour le développement de Droneez.</p>
                    <p style="text-align: center;">En attendant nous avons un conseil à vous donner ! Si vous souscrivez une assurance, faites surtout attention aux montants couverts et aux petites lignes en annexes qui pourraient exclure certaines couvertures.</p>
                    <p style="text-align: center;">Si vous ne faites que des photos de mariages ou d’habitations pas besoin de gros montants, en revanche si votre crédo ce sont les musées ou les monuments historiques… attention à ce que votre assurance couvre bien l’ensemble des dégâts possibles.</p>
                    <p style="text-align: center;">Lorsque vous enverrez votre drone dans les vitres d’un monument classé au patrimoine mondial de l’UNESCO ou dans une œuvre de Picasso vous serez très content que ce soit l’assurance qui prenne en charge l’intégralité des dommages.</p>
                    <h2 style="text-align: center;"></h2>
                    <h2 style="text-align: center;"><strong>Deuxième réponse : Décollage facile avec CLEARANCE</strong></h2>
                    <p style="text-align: center;"><img class="alignnone size-full wp-image-3097" src="assets/img/articles/Décollage en toute Clairance - Droneez_files/logo_clearance_bleu_300dpi.png" alt="" width="420" height="88"></p>
                    <p>&nbsp;</p>
                    <p style="text-align: center;">En aéronautique une clairance (en anglais «&nbsp;Clearance&nbsp;») est une autorisation délivrée par un organisme du contrôle de la circulation aérienne qui garantit que vous pouvez manœuvrer dans la zone sans danger.</p>
                    <h3 style="text-align: center;">Création &amp; Offre</h3>
                    <p style="text-align: center;">Et <a href="http://clearance.aero/">CLEARANCE</a> c’est le nom choisi par la start-up parisienne avec qui nous sommes fières de vous annoncer un nouveau partenariat.&nbsp;Fondée en 2017 par Florent Mainfroy et David Miret, des anciens d’AIRINOV une société pionnière dans la conception de drones agricoles.</p>
                    <p style="text-align: center;">Elle propose des services d’aides administratives aux demandes de décollages de drones auprès des préfectures et des DSAC (Direction de la Sécurité de l’Aviation Civile).</p>
                    <p style="text-align: center;">Ils proposent notamment un abonnement&nbsp;pour l’accès à une carte qui vous indiquera toutes les contraintes et points bloquant à prendre en compte lors de votre demande de décollage ! Cela vous permettra de trouver le meilleur point de décollage pour votre vol.</p>
                    <h3 style="text-align: center;">Une simplification concrète</h3>
                    <p style="text-align: center;">Plus que juste pratique, cela vous évite de vous croiser toutes les données sur les cartes OACI et les NOTAM pour savoir si la RTBA est activée et que… bref vous l’aurez compris ça vous simplifie la vie&nbsp;d’avoir une carte unique avec toutes les informations utiles en un seul clic.</p>
                    <h3 style="text-align: center;">Un exemple</h3>
                    <p style="text-align: center;"><img class="alignnone size-full wp-image-3098" src="assets/img/articles/Décollage en toute Clairance - Droneez_files/Zone-P25-Malakoff.jpg" alt="" width="984" height="718"></p>
                    <p style="text-align: center;">Pour vous montrer un exemple nous avons lancé une demande pour un décollage de notre local au 17 rue Hoche à Malakoff, situé dans une zone rouge (la P25, pour Prohibited 25).</p>
                    <blockquote>
                    <p style="text-align: center;"><em><a href="http://clearance.aero/">CLEARANCE</a> nous annonce alors de faire attention aux points suivants&nbsp;: nous sommes en agglomération, proche de différents aérodromes &amp; héliports (Orly, Hélistation de l’hôpital de Clamart et d’Issy-les-Moulineaux), etc.</em></p>
                    </blockquote>
                    <h3 style="text-align: center;">Le Graal</h3>
                    <p style="text-align: center;">Cette start-up propose également de s’occuper des demandes de décollage à déposer aux Préfectures et à la DSAC à votre place, le fameux Cerfa 15476*02 ! Celui qui s’apparente parfois au laissé-passé A38 de la maison qui rend fou d’Astérix si vous avez le bonheur d’avoir une mission à effectuer dans Paris intramuros.</p>
                    <p style="text-align: center;">Du coup avec <a href="http://clearance.aero/">CLEARANCE</a> fini les prises de tête avec nos amis de la préfecture, vous pouvez (enfin) vous concentrer sur votre cœur de métier de vidéaste&nbsp;: faire des prises de vues (par drone), les dérusher et les monter, <em>enjoy</em>&nbsp;!</p>
                    <p>&nbsp;</p>
                    <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu <a href="https://www.droneez.com/">DRONEEZ</a>&nbsp;nous vous invitons à&nbsp;liker&nbsp;</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                    <p>&nbsp;</p>
                    <div style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                    <div style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                    <p>&nbsp;</p>
                    </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2019/02/12/" title="15 h 03 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2019-02-12T15:03:53+00:00">12 février 2019</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;t=D%C3%A9collage+en+toute+Clairance" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;text=D%C3%A9collage+en+toute+Clairance" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;title=D%C3%A9collage%20en%20toute%20Clairance&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=D%C3%A9collage%20en%20toute%20Clairance%20-%20https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdecollage-en-toute-clairance%2F&amp;title=D%C3%A9collage+en+toute+Clairance" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                    </article>`,
                meta: [
                        {name: 'description', content: 'Prêt au décollage... sortir son drone avec assurance et plan de vol !'},
                        {name: 'author', content: 'Matt'},
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
                        {property: 'twitter:creator', content: '@DRONEEZ_fr'}
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'decollage-en-toute-clairance'
            },{
                id: 17,
                title: "Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez",
                content:
                `<article id="post-3082" class="vertical-fancy-style post-3082 post type-post status-publish format-standard has-post-thumbnail category-culture category-evenements category-home category-79 category-35 category-36 description-off">
                <div class="post-thumbnail layzr-bg-transparent"><div class="fancy-date"><a title="10 h 52 min" href="https://www.droneez.com/2019/02/06/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">6</span><span class="entry-year">2019</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez_files/Sabri_Blog-min.png" width="4032" height="2016" title="Sabri_Blog-min" alt="" srcset="assets/img/articles/Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez_files/Sabri_Blog-min.png" style="will-change: auto;"></div><div class="entry-content"><p style="text-align: center;">Pour devenir un pilote de drone il faut suivre une formation dans une école de pilotage. Notre société, Droneez est celle qui est la plus proche du centre de Paris ! Elle dispense des cours théoriques et pratiques pour rendre ludique et accessible le certificat de pilotage de la DGAC – Direction Général de l’Aviation Civile.</p>
                <h2 style="text-align: center;"></h2>
                <h2 style="text-align: center;">Une nouvelle façon d’aborder la formation professionnelle au pilotage de drones</h2>
                <p style="text-align: center;">En tant qu’école de pilotage de drone Droneez forme régulièrement de futurs télépilotes. Nous en apprenons un peu plus à chaque session avec nos élèves (et oui parfois ce sont les élèves qui apprennent des choses aux instructeurs et heureusement&nbsp;!), du coup après plusieurs mois de formation professionnelle au pilotage de drones nous en avons tirés quelques leçons.</p>
                <p style="text-align: center;">Pour ceux qui ne connaissent pas notre formation, voici une présentation en quelques mots&nbsp;:</p>
                <p style="text-align: center;">Notre formation au pilotage de drone s’étale sur 5 jours non-consécutifs, car on apprend plus vite en laissant le temps aux informations de décanter, donc inutile de tout concentrer sur une semaine.</p>
                <p style="text-align: center;">La formation s’étale sur 35h, découpés en 19h de pratique et 16h de théorie.</p>
                <p style="text-align: center;">Nous proposons une formation sur plusieurs lundis consécutifs, avec bien sur des possibilités d’ajustement d’agenda, car nos élèves n’ont pas tous des emplois du temps maîtrisable, nous savons donc nous adapter.</p>
                <p style="text-align: center;"><img class="alignnone size-full wp-image-3084" src="assets/img/articles/Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez_files/P1066540-min.jpg" alt="" width="5184" height="2928"></p>
                <h2 style="text-align: center;">La pratique&nbsp;: le pilotage avant tout</h2>
                <p style="text-align: center;">Chez Droneez nos formateurs sont tous pilotes de drones de courses et télépilotes professionnels de drones, et enseignent aussi bien pour les formations de pilotes de drones professionnels que les cours sur des drones sans assistances.</p>
                <p style="text-align: center;">Comme pour le permis voiture, le meilleur moyen d’apprendre est de pratiquer ! Notre conviction est de se dire «&nbsp;<strong>qui peut le plus peut le moins</strong>&nbsp;»&nbsp;: aussi nous apprenons à nos élève sur plusieurs modèles différents avec et sans assistance.</p>
                <p style="text-align: center;">De cette manière quasiment tous les aspects du pilotage sont abordés.</p>
                <p style="text-align: center;">Pour la théorie, c’est un peu moins fun, on a parfois l’impression de revenir sur les bancs de l’école, et d’une certaine manière c’est le cas.</p>
                <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3086" src="assets/img/articles/Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez_files/P1055834_2.jpg" alt="" width="5184" height="3888"></h2>
                <h2 style="text-align: center;">Un nouvel examen théorique</h2>
                <p style="text-align: center;">La DGAC a sorti depuis le 1<sup>er</sup> juillet un nouvel examen théorique Drone avec un nouveau programme beaucoup plus adapté aux métiers de télépilote et qui évolue au fur et à mesure pour mieux s’adapter au quotidien du télépilote.</p>
                <p style="text-align: center;">Soyons clair, l’intégralité du programme ne sera pas votre travail de tous les jours. Il s’agit principalement des réglementations à connaître et des principes fondamentaux nécessaires à la compréhension des règles de l’air. De s’adapter dans des altitudes où l’on peut croiser également des avions, des hélicoptères, des ULM et d’autres drones.</p>
                <p style="text-align: center;">Le nouveau programme rentre moins dans certains détails très axés aéronautiques qui sont plus des règles concernant les aéronefs habités et évoluant à des altitudes bien plus hautes, comme c’était le cas avec l’ancien théorique ULM.</p>
                <p style="text-align: center;">Le programme ne comprend rien d’exotique, il faut juste s’y préparer sérieusement, exactement comme le passage du code de la route, et nous vous aidons avec des fiches récapitulatives, notre expérience sur les erreurs à éviter sur les QCM. Nous pratiquons durant la formation des entraînements par groupe pour améliorer la compréhension du programme en échangeant à plusieurs confrontant ainsi les points de vue.</p>
                <p style="text-align: center;">Pour rappel le passage du brevet se fait en salle Océane (nom des salles d’examen de la DGAC) à Orly ou dans d’autres villes ! L’ordinateur devant vos yeux les seules outils dont vous disposez sont un crayon et du papier brouillon. Vous avez 1h30 pour répondre à 60 questions, une seule bonne réponse par question, si vous avez 45 bonnes réponses ou plus c’est gagné&nbsp;!</p>
                <p style="text-align: center;">Sinon il faudra le repasser et s’acquitter de 30€ pour vous inscrire à nouveau, il y a 2 sessions par mois, à Orly c’est un mercredi sur deux.</p>
                <p style="text-align: center;">Depuis le début de nos formations chez Droneez, nous observons que si les élèves s’intéressent aux règles et au manuel, et travaillent sérieusement ils peuvent être reçus facilement à l’examen.</p>
                <h2 style="text-align: center;"><img class="alignnone size-full wp-image-3085" src="assets/img/articles/Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez_files/Low-version-72PPP-final-cours-drone-paris-360-Panorama-Panorama.jpg" alt="" width="1920" height="960"></h2>
                <p style="text-align: center;">Notre lieu est hors du commun, car nous sommes la seule salle dédiée aux drones avec autant d’activités différentes&nbsp;: volières d’entrainement, espace de coworking, formation professionnelle, fablab, bar et piste de course.</p>
                <p style="text-align: center;">Mais nous sommes surtout l’école de formation agréée la plus proche de Paris et accessible à pied, vélo, métro, transilien ou même tapis volant si vous le souhaitez.</p>
                <p style="text-align: center;">Nous vous attendons chez nous pour vous tamponner en temps que télépilote pour la pratique.</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu <a href="https://www.droneez.com/">DRONEEZ</a>&nbsp;nous vous invitons à&nbsp;liker&nbsp;</span></p>
                <p style="text-align: center;"><span style="color: #000000;">notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                <div style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2019/02/06/" title="10 h 52 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2019-02-06T10:52:22+00:00">6 février 2019</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fune-ecole-de-pilotage-aux-portes-de-paris-chez-droneez%2F&amp;t=Une+%C3%A9cole+de+pilotage+aux+portes+de+Paris+chez+DRONEEZ" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fune-ecole-de-pilotage-aux-portes-de-paris-chez-droneez%2F&amp;text=Une+%C3%A9cole+de+pilotage+aux+portes+de+Paris+chez+DRONEEZ" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fune-ecole-de-pilotage-aux-portes-de-paris-chez-droneez%2F&amp;title=Une%20%C3%A9cole%20de%20pilotage%20aux%20portes%20de%20Paris%20chez%20DRONEEZ&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Une%20%C3%A9cole%20de%20pilotage%20aux%20portes%20de%20Paris%20chez%20DRONEEZ%20-%20https%3A%2F%2Fwww.droneez.com%2Fune-ecole-de-pilotage-aux-portes-de-paris-chez-droneez%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fune-ecole-de-pilotage-aux-portes-de-paris-chez-droneez%2F&amp;title=Une+%C3%A9cole+de+pilotage+aux+portes+de+Paris+chez+DRONEEZ" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez'},
                    {property: 'og:description', content: 'Une formation de drone en 35h adaptée à tous, proche de Paris pour apprendre la théorie et la pratique en intérieur et extérieur. Une méthode adaptée et agréée DGAC pour se préparer au brevet théorique et valider le certificat pratique de télépilote.'},
                    {property: 'og:url', content: 'https://www.droneez.com/une-ecole-de-pilotage-aux-portes-de-paris-chez-droneez/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:section', content: 'home'},
                    {property: 'article:published_time', content: '2019-02-06T10:52:22+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2019/02/Low-version-72PPP-final-cours-drone-paris-360-Panorama-Panorama.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2019/02/Low-version-72PPP-final-cours-drone-paris-360-Panorama-Panorama.jpg'},
                    {property: 'og:image:width', content: '1920'},
                    {property: 'og:image:height', content: '960'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'Une formation de drone en 35h adaptée à tous, proche de Paris pour apprendre la théorie et la pratique en intérieur et extérieur. Une méthode adaptée et agréée DGAC pour se préparer au brevet théorique et valider le certificat pratique de télépilote.'},
                    {name: 'twitter:title', content: 'Une école de pilotage aux portes de Paris chez DRONEEZ - Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2019/02/Sabri_Blog-min.png'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'une-ecole-de-pilotage-aux-portes-de-paris-chez-droneez'
            },{
                id: 16,
                title: "France 3 présente DRONEEZ le 23 juillet à 19h - Le Blog Droneez",
                content:
                `<article id="post-2946" class="vertical-fancy-style post-2946 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-ecole-drone tag-france3 tag-vol-drone category-35 category-36 description-off">
                <div class="post-thumbnail layzr-bg-transparent"><div class="fancy-date"><a title="17 h 41 min" href="https://www.droneez.com/2018/07/30/" rel="nofollow"><span class="entry-month">Juil</span><span class="entry-date updated">30</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/France 3 présente DRONEEZ le 23 juillet à 19h - Le Blog Droneez_files/2018-07-25_1733.png" width="1600" height="800" title="2018-07-25_1733" alt="" srcset="assets/img/articles/France 3 présente DRONEEZ le 23 juillet à 19h - Le Blog Droneez_files/2018-07-25_1733.png" style="will-change: auto;"></div><div class="entry-content"><p>Une école de drone a ouvert ses portes à Malakoff et France 3 vient à la découverte de cette école.</p>
                <h2>PETITE NOUVELLE DE BON MATIN</h2>
                <p>Lundi 23 juillet, suite à notre parution dans «&nbsp;<a href="http://www.leparisien.fr/info-paris-ile-de-france-oise/malakoff-pilote-de-drone-ca-s-apprend-21-07-2018-7828725.php">Le Parisien</a>&nbsp;» le 21 juillet… un appel à 9h30…</p>
                <p>Une journaliste de France 3 se présente et souhaite réaliser un reportage sur notre salle et le montage dans la journée pour un documentaire de deux minutes qui va passer le soir même et qui est sur l’école de pilotage.</p>
                <p>Grande audience, grande pression pour ce passage au journal régional d’Ile de France !</p>
                <p>On réunit un membre du club, un pilote confirmée, une photographe et des clients qui s’essaient pour la première fois et qui ont réservé à 13h… La journée commence sur les chapeaux de roues !</p>
                <h2>PLANNING EXPRESS</h2>
                <p>A <strong>10h05</strong> tout est booké sans avoir l’idée d’un sujet concret… mode express activé pour présenter notre concept &amp; toutes les offres pour nos clients. Sabri présentera le côté prise de vue &amp; formation professionnelle &amp; Matthieu fera le cours et présentera nos pilotes !</p>
                <p><strong>12h30</strong> / les journalistes arrivent !</p>
                <p><strong>13h</strong> / début du cours, présentation des clients et premiers tests de vols</p>
                <p><strong>13h30</strong> / le cours continue et les journalistes interrogent les pilotes.</p>
                <p><strong>14h</strong> / interview d’<a href="http://www.evelyne-noury-photographe.fr/">Evelyne Noury</a> qui a passé son certificat DGAC chez nous pour la partie pratique et qui se prépare au théorique drone qui est sortie depuis le 1er juillet ! pour mieux poser des normes sur cette pratique récente. Le pilotage de drone pour les amateurs &amp; professionnels est plus cadré depuis cette date, avec un examen théorique pour les amateurs qui souhaitent posséder un drone de plus de 800 grammes.</p>
                <p>Le but avant de piloter, prenez un cours de drone dans notre école de pilotage.</p>
                <p><strong>14h30</strong> / Démonstration des pilotes ! Adan Lesage, pilote ayant été formé chez Droneez &amp; David Queffelec ayant perfectionné son pilotage dans nos locaux font leur tour de piste.</p>
                <p><strong>15h</strong> / Finalisation &amp; rangement.</p>
                <p><strong>19h</strong> / On est tous devant la télé pour découvrir ce super reportage !</p>
                <p>&nbsp;</p>
                <p>Merci de votre confiance pour ce reportage <a href="https://france3-regions.francetvinfo.fr/">France 3</a> !&nbsp; Pour retrouver l’article &gt;<a href="https://france3-regions.francetvinfo.fr/paris-ile-de-france/hauts-de-seine/malakoff-ecole-apprendre-piloter-drones-1516699.html">ici</a>&lt;&nbsp; Pour le Replay (13’50 à 15’50 ) &gt;<a href="https://france3-regions.francetvinfo.fr/paris-ile-de-france/emissions/jt-1920-paris-ile-de-france">ici</a>&lt;</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à&nbsp;liker&nbsp;notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                <div style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/07/30/" title="17 h 41 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-07-30T17:41:12+00:00">30 juillet 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Ffrance-3-presente-droneez-le-23-juillet-a-19h%2F&amp;t=France+3+pr%C3%A9sente+DRONEEZ+le+23+juillet+%C3%A0+19h" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Ffrance-3-presente-droneez-le-23-juillet-a-19h%2F&amp;text=France+3+pr%C3%A9sente+DRONEEZ+le+23+juillet+%C3%A0+19h" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Ffrance-3-presente-droneez-le-23-juillet-a-19h%2F&amp;title=France%203%20pr%C3%A9sente%20DRONEEZ%20le%2023%20juillet%20%C3%A0%2019h&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=France%203%20pr%C3%A9sente%20DRONEEZ%20le%2023%20juillet%20%C3%A0%2019h%20-%20https%3A%2F%2Fwww.droneez.com%2Ffrance-3-presente-droneez-le-23-juillet-a-19h%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Ffrance-3-presente-droneez-le-23-juillet-a-19h%2F&amp;title=France+3+pr%C3%A9sente+DRONEEZ+le+23+juillet+%C3%A0+19h" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "France 3 a réalisé un reportage sur notre école de pilotage de drones pour l'amateur &amp; le professionnel dans un but de captation d'images ou uniquement pour le plaisir."},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'France 3 présente DRONEEZ le 23 juillet à 19h - Le Blog Droneez'},
                    {property: 'og:description', content: "France 3 a réalisé un reportage sur notre école de pilotage de drones pour l'amateur &amp; le professionnel dans un but de captation d'images ou uniquement pour le plaisir."},
                    {property: 'og:url', content: 'https://www.droneez.com/france-3-presente-droneez-le-23-juillet-a-19h/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'ecole drone'},
                    {property: 'article:tag', content: 'france3'},
                    {property: 'article:tag', content: 'vol drone'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-07-30T17:41:12+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/07/2018-07-25_1733.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/07/2018-07-25_1733.png'},
                    {property: 'og:image:width', content: '1600'},
                    {property: 'og:image:height', content: '892'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "France 3 a réalisé un reportage sur notre école de pilotage de drones pour l'amateur &amp; le professionnel dans un but de captation d'images ou uniquement pour le plaisir."},
                    {name: 'twitter:title', content: 'France 3 présente DRONEEZ le 23 juillet à 19h - Le Blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/07/2018-07-25_1733.png'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'france-3-presente-droneez-le-23-juillet-a-19h'
            },{
                id: 15,
                title: "Quoi de mieux qu'une animation Team Building drone ? - Le Blog Droneez",
                content:
            `<article id="post-1618" class="vertical-fancy-style post-1618 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-pilotage-drone tag-team-building category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="11 h 26 min" href="https://www.droneez.com/2018/07/23/" rel="nofollow"><span class="entry-month">Juil</span><span class="entry-date updated">23</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Quoi de mieux qu&#39;une animation Team Building drone _ - Le Blog Droneez_files/DJI_0248.jpg" width="4000" height="2000" title="DCIM100MEDIADJI_0248.JPG" alt="" srcset="assets/img/articles/Quoi de mieux qu&#39;une animation Team Building drone _ - Le Blog Droneez_files/DJI_0248.jpg" style="will-change: auto;"></div><div class="entry-content"><div class="vc_row wpb_row vc_row-fluid"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner "><div class="wpb_wrapper">
                <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                <div>
                <p style="text-align: left;"><span style="color: #000000;">Vous êtes une entreprise ? et vous voulez renforcer la cohésion de vos équipes et les rendre plus performante ?…Alors un team building s’impose !&nbsp;</span></p>
                <p style="text-align: left;"><span style="color: #000000;">Chez Droneez on réalise des événements pour les entreprises tels que des team buidling, séminaires, démonstrations de pilotage de drones, initiations, animations continues…Et pleins d’autres activités variées qui ont pour but de réunir une équipe et renforcer l’aspect de challenge et d’entraide entre les membres du groupe.&nbsp;</span></p>
                <p><span style="color: #000000;">Ce qui rend unique un team building chez Droneez, c’est l’esprit familial et convivial assurer par l’équipe. Notre but est de vous offrir une expérience inoubliable, vous aider à sortir de votre zone de confort et de&nbsp;vous envoler en l’air dans un univers fluorescent !<br>
                </span></p>
                <p><span style="color: #000000;">L’organisation est simple : On divise l’équipe en 3 ou 4 sous-équipes de 4 à 8 personnes, tout dépend de l’effectif, ensuite chaque équipe passe par le niveau initiation puis on organise des challenges entre les sous-équipes. Le but étant de favoriser l’esprit de compétition, atténuer le stress du travail, solidifier les liens entre les employés et faire ressortir le potentiel de chacun d’eux.&nbsp;</span><span style="color: #000000;">Ce type d’activité est aussi un moyen de&nbsp;récompenser des salariés&nbsp;pour leurs efforts et implication. N’oublions pas que la reconnaissance est au sommet de la pyramide de Maslow !</span></p>
                <h2><span style="color: #000000;">Quelques bonnes raisons pour penser à un team-building&nbsp;&nbsp;</span></h2>
                <ul>
                <li><span style="color: #000000;">Motiver les employés et améliorer la communication entre eux</span></li>
                <li><span style="color: #000000;">Développer les compétences des employés et renforcer leur esprit d’équipe </span></li>
                <li><span style="color: #000000;">Souder les équipes et briser la glace entre les membres</span></li>
                <li><span style="color: #000000;">Les sortir du quotidien et de leur zone de confort</span></li>
                <li><span style="color: #000000;">Créer des relations de confiance entre les salaries&nbsp;mais aussi avec leurs managers : développer un sentiment de cohésion qui aidera à résoudre les conflits ainsi que les difficultés du quotidien….</span></li>
                </ul>
                </div>
                <p>&nbsp;</p>
                <p><span style="color: #000000;">Cette tendance est en vogue actuellement dans le monde entier. C’est le nouveau mythe managérial au sein des entreprises et&nbsp;une agréable aventure qui laissera, à chacun des participants, un souvenir impérissable.&nbsp;Alors,&nbsp;osez le challenge !&nbsp;</span></p>
                <p>&nbsp;</p>
                <div>
                <p><img class="wp-image-2881 aligncenter" src="assets/img/articles/Quoi de mieux qu&#39;une animation Team Building drone _ - Le Blog Droneez_files/DJI_0248.jpg" alt="" width="500" height="375"></p>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div>
                <p style="text-align: center;"><span style="color: #000000;"><strong>Vous voulez organiser un événement&nbsp;drone? Team building, séminaire d’entreprise, etc … Contactez nous par mail: contact@droneez.com</strong></span></p>
                </div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à&nbsp;liker&nbsp;notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                <div style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                </div>
                <div style="text-align: center;"></div>
                </div>
                </div>
                </div></div></div></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/07/23/" title="11 h 26 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-07-23T11:26:54+00:00">23 juillet 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fquoi-de-mieux-qu-une-animation-team-building-drone%2F&amp;t=Quoi+de+mieux+qu%27une+animation+Team+Building+drone+%3F" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fquoi-de-mieux-qu-une-animation-team-building-drone%2F&amp;text=Quoi+de+mieux+qu%27une+animation+Team+Building+drone+%3F" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fquoi-de-mieux-qu-une-animation-team-building-drone%2F&amp;title=Quoi%20de%20mieux%20qu%27une%20animation%20Team%20Building%20drone%20%3F&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Quoi%20de%20mieux%20qu%27une%20animation%20Team%20Building%20drone%20%3F%20-%20https%3A%2F%2Fwww.droneez.com%2Fquoi-de-mieux-qu-une-animation-team-building-drone%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fquoi-de-mieux-qu-une-animation-team-building-drone%2F&amp;title=Quoi+de+mieux+qu%27une+animation+Team+Building+drone+%3F" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "Vous êtes une entreprise ? et vous voulez renforcer la cohésion de vos équipes et la rendre plus performante ?...Alors un team building s'impose !&nbsp;"},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: "Quoi de mieux qu'une animation Team Building drone ? - Le Blog Droneez"},
                    {property: 'og:description', content: "Vous êtes une entreprise ? et vous voulez renforcer la cohésion de vos équipes et la rendre plus performante ?...Alors un team building s'impose !&nbsp;"},
                    {property: 'og:url', content: 'https://www.droneez.com/quoi-de-mieux-qu-une-animation-team-building-drone/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'pilotage drone'},
                    {property: 'article:tag', content: 'team building'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-07-23T11:26:54+02:00'},
                    {property: 'article:modified_time', content: '2018-08-02T09:53:23+02:00'},
                    {property: 'og:updated_time', content: '2018-08-02T09:53:23+02:00'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "Vous êtes une entreprise ? et vous voulez renforcer la cohésion de vos équipes et la rendre plus performante ?...Alors un team building s'impose !&nbsp;"},
                    {name: 'twitter:title', content: "Quoi de mieux qu'une animation Team Building drone ? - Le Blog Droneez"},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/DJI_0248.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Droneez'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'quoi-de-mieux-qu-une-animation-team-building-drone'
            },{
                id: 14,
                title: "Le Wooploop Droneez, l'espace de travail qui vous inspire ! - Le Blog Droneez",
                content:
            `<article id="post-2847" class="vertical-fancy-style post-2847 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-coworking-droneez tag-droneez tag-wooploop category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="10 h 29 min" href="https://www.droneez.com/2018/06/20/" rel="nofollow"><span class="entry-month">Juin</span><span class="entry-date updated">20</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Le Wooploop Droneez, l&#39;espace de travail qui vous inspire ! - Le Blog Droneez_files/IMG_3892.jpg" width="3264" height="1632" title="IMG_3892" alt="" srcset="assets/img/articles/Le Wooploop Droneez, l&#39;espace de travail qui vous inspire ! - Le Blog Droneez_files/IMG_3892.jpg" style="will-change: auto;"></div><div class="entry-content"><p>&nbsp;</p>
                <h3><img class="aligncenter wp-image-2888" src="assets/img/articles/Le Wooploop Droneez, l&#39;espace de travail qui vous inspire ! - Le Blog Droneez_files/WOOPLOOP-2.png" alt="" width="240" height="240"></h3>
                <h3 style="text-align: center;"><span style="color: #000000;">WoopLoop : Le coworking chez Drone</span><span style="color: #000000;">ez</span></h3>
                <p style="text-align: center;"><span style="color: #000000;">Vous êtes en déplacement professionnel et vous n’avez pas de lieu de rencontre ? vous avez u</span><span style="color: #000000;">ne réunion et vous voulez éviter les coffee-shop bondés et bruyants,&nbsp;</span><span style="color: #000000;">vous cherchez un endroit calme et original ?…Pas de soucis, Droneez a trouvé la solution : Le WoopLoop, l’espace de travail qui vous inspire !&nbsp;</span></p>
                <h3 style="text-align: center;"><span style="color: #000000;">Il n’y a pas que les drones qui s’envolent !</span></h3>
                <p style="text-align: center;"><span style="color: #000000;">Le WoopLoop est une s</span><span style="color: #000000;">pirale de créativité qui se compose d’un grand espace de coworking, des sa</span><span style="color: #000000;">lles de réunion (pour 2 à 6 personnes et de 5 à 12&nbsp;</span><span style="color: #000000;">personnes), d’une salle de travail et de présentation et des ateliers ainsi qu’une mezzanine dédiée aux conférences. Le tout est&nbsp;</span><span style="color: #000000;">équipé de A à Z :&nbsp; vidéos projecteur, télévision, wifi, des imprimantes 3D, tables d’atelier… Ainsi, qu’une cuisine équipée, un baby-foot, Xbox….Bref tout ce qu’il faut pour un espace p</span><span style="color: #000000;">rofessionnel mais comme chez vous !&nbsp;</span></p>
                <h3 style="text-align: center;"><span style="color: #000000;">Esprit communautaire&nbsp;</span></h3>
                <p style="text-align: center;"><span style="color: #000000;">Intégrer un coworking est le synonyme de s’entraider en communauté, c’est une véritable occasion pour partager vos idées, expériences, savoir-faire…Pas qu’un simple bureau ! ce qui favorise la créativité, le dynamique et l’esprit d’équipe. Et qui sait ? peut-être que cela sera la flamme d’une explosion de nouveaux projets collectifs.</span></p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Alors, pourquoi ne pas tenter l’expérience ? N’hésitez pas à jeter un coup d’oeil sur les formules du WoopLoop Droneez et de réserver en ligne via le lien suivant :</span>&nbsp;<a href="https://www.droneez.com/wooploop/">https://www.droneez.com/wooploop/</a></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p><img class="size-full wp-image-2903 aligncenter" src="assets/img/articles/Le Wooploop Droneez, l&#39;espace de travail qui vous inspire ! - Le Blog Droneez_files/Sans-titre-1.jpg" alt="" width="600" height="350"></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à&nbsp;liker&nbsp;notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                <div style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/06/20/" title="10 h 29 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-06-20T10:29:02+00:00">20 juin 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fle-wooploop-droneez-l-espace-de-travail-qui-vous-inspire%2F&amp;t=Le+Wooploop+Droneez%2C+l%27espace+de+travail+qui+vous+inspire+%21" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fle-wooploop-droneez-l-espace-de-travail-qui-vous-inspire%2F&amp;text=Le+Wooploop+Droneez%2C+l%27espace+de+travail+qui+vous+inspire+%21" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fle-wooploop-droneez-l-espace-de-travail-qui-vous-inspire%2F&amp;title=Le%20Wooploop%20Droneez%2C%20l%27espace%20de%20travail%20qui%20vous%20inspire%20%21&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Le%20Wooploop%20Droneez%2C%20l%27espace%20de%20travail%20qui%20vous%20inspire%20%21%20-%20https%3A%2F%2Fwww.droneez.com%2Fle-wooploop-droneez-l-espace-de-travail-qui-vous-inspire%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fle-wooploop-droneez-l-espace-de-travail-qui-vous-inspire%2F&amp;title=Le+Wooploop+Droneez%2C+l%27espace+de+travail+qui+vous+inspire+%21" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "Vous êtes en déplacement professionnel et vous n’avez pas de lieu de rencontre ? vous avec une réunion et vous voulez éviter les les coffee-shop bondés et bruyants, vous cherchez un endroit calme et original ?...Pas de soucis, Droneez a trouvé la solution : Le WoopLoop, l'espace de travail qui vous inspire !&nbsp;"},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: "Le Wooploop Droneez, l'espace de travail qui vous inspire ! - Le Blog Droneez"},
                    {property: 'og:description', content: "Vous êtes en déplacement professionnel et vous n’avez pas de lieu de rencontre ? vous avec une réunion et vous voulez éviter les les coffee-shop bondés et bruyants, vous cherchez un endroit calme et original ?...Pas de soucis, Droneez a trouvé la solution : Le WoopLoop, l'espace de travail qui vous inspire !&nbsp;"},
                    {property: 'og:url', content: 'https://www.droneez.com/le-wooploop-droneez-l-espace-de-travail-qui-vous-inspire/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'coworking droneez'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'wooploop'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-06-20T10:29:02+02:00'},
                    {property: 'article:modified_time', content: '2018-06-20T16:44:27+02:00'},
                    {property: 'og:updated_time', content: '2018-06-20T16:44:27+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/06/WOOPLOOP-2.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/06/WOOPLOOP-2.png'},
                    {property: 'og:image:width', content: '1000'},
                    {property: 'og:image:height', content: '1000'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "Vous êtes en déplacement professionnel et vous n’avez pas de lieu de rencontre ? vous avec une réunion et vous voulez éviter les les coffee-shop bondés et bruyants, vous cherchez un endroit calme et original ?...Pas de soucis, Droneez a trouvé la solution : Le WoopLoop, l'espace de travail qui vous inspire !&nbsp;"},
                    {name: 'twitter:title', content: "Le Wooploop Droneez, l'espace de travail qui vous inspire ! - Le Blog Droneez"},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/06/IMG_3892.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'le-wooploop-droneez-l-espace-de-travail-qui-vous-inspire'
            },{
                id: 13,
                title: "Le drone...1 article, plusieurs réponses ! - Le Blog Droneez",
                content:
            `<article id="post-2827" class="vertical-fancy-style post-2827 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-cest-quoi-un-drone tag-drone tag-droneez tag-pilotage tag-questions-drone tag-vol category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="9 h 18 min" href="https://www.droneez.com/2018/06/11/" rel="nofollow"><span class="entry-month">Juin</span><span class="entry-date updated">11</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Le drone...1 article, plusieurs réponses ! - Le Blog Droneez_files/s1-bg3-v2.jpg" width="2294" height="1147" title="s1-bg3-v2" alt="" srcset="assets/img/articles/Le drone...1 article, plusieurs réponses ! - Le Blog Droneez_files/s1-bg3-v2.jpg" style="will-change: auto;"></div><div class="entry-content"><h2><span style="color: #000000;">C’est quoi un drone ?</span></h2>
                <p><span style="color: #000000;">Pour une définition courte et simple, on peut dire que le drone est un engin électrique ou thermique piloté à distance.</span><br>
                <span style="color: #000000;">Il rentre dans la grande famille des<strong><b> aéronefs </b></strong>: C’est à dire tous les moyens de transport qui sont capable de s’élever en altitude : comme les avions, les hélicoptères, les planeurs…..Bref, tout ce qui vole sauf les oiseaux <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/Le drone...1 article, plusieurs réponses ! - Le Blog Droneez_files/1f609.svg">&nbsp;</span></p>
                <p><img class="wp-image-2839 aligncenter" src="assets/img/articles/Le drone...1 article, plusieurs réponses ! - Le Blog Droneez_files/dji-mavic-pro-avec-dji-care-1an-p-image-190597-grande.jpg" alt="" width="300" height="200"></p>
                <h4><span style="color: #000000;"><strong><em>De quoi est composé un drone !</em></strong></span></h4>
                <ul>
                <li><span style="color: #000000;">Châssis : C’est la base du drone, sur lui que vous allez monter le reste des pièces. Plus le châssis est ultra léger plus le drone&nbsp;gagne de l’autonomie en volant. </span></li>
                <li><span style="color: #000000;">Bras :&nbsp; bras longs = plus de stabilité.&nbsp;</span></li>
                <li><span style="color: #000000;">Moteurs : Ce sont eux qui permettent au drone de voler !&nbsp;(c’est magique non …!)&nbsp;</span></li>
                <li><span style="color: #000000;">Hélices : Alors elles, leur rôle est de&nbsp;tourner très vite pour soulever le drone dans l’air et le déplacer. Elles doivent être adaptées à la taille de votre engin… mais aussi aux moteurs que vous avez choisis !&nbsp;</span></li>
                <li><span style="color: #000000;">Batterie : Tout simplement, c’est la source d’énergie de votre drone.&nbsp;&nbsp;</span></li>
                <li><span style="color: #000000;">Le contrôleur de vol : C’est le secret de la stabilité de l’engin, une puce électronique qui est paramétrable par un logiciel et qui va permettre de contrôler et d’optimiser le drone.</span></li>
                <li><span style="color: #000000;">Les ESC : Souvent intégrer à un contrôleur de vol, ils peuvent être placées sur les bras, leur rôle est de traduire le langage du contrôleur de vol pour qu’il soit compréhensible par les moteurs.</span></li>
                <li><span style="color: #000000;">Caméra : Bien-sur qui dit caméra dit photos/vidéos..</span></li>
                </ul>
                <h2><span style="color: #000000;">Comment <b><span style="color: #ff0000;"><span style="color: #000000;">est-ce qu’il</span>&nbsp;</span></b>fonctionne?</span></h2>
                <p><span style="color: #000000;">Ce n’est pas sorcier : avec une radiocommande (ou une application sur le smartphone) on manie les engins, ensuite les hélices commencent à tourner (deux dans le sens horaire et les deux autres dans le sens contraire). A</span><span style="color: #000000;">près, on augmente l</span><span style="color: #000000;">a vitesse progressivement pour faire monter notre drone (et bien évidemment pour le faire descendre on la réduit !). Au début, il faut apprendre à contrôler la stabilité et la vitesse du drone et surtout le garder en contact visuel pour évit</span><span style="color: #000000;">er un incident ! Les drones de prise de vue, ont un contrôleur de vol qui stabilise l’altitude &amp; qui corrige les erreurs de pilotage ainsi qu’une assistance GPS pour que le pilotage soit plus simple pour pouvoir utiliser toutes les possibilités offertes par le drone sans perdre le contrôle.</span></p>
                <p><img class="wp-image-2842 aligncenter" src="assets/img/articles/Le drone...1 article, plusieurs réponses ! - Le Blog Droneez_files/P9990805.jpg" alt="" width="350" height="233"></p>
                <h2><span style="color: #000000;">A quoi servent les drones ?</span></h2>
                <p><span style="color: #000000;">Pour le fun, le plaisir du vol, prises de photos et videos….Et plus sérieusement, il est possible d’utiliser&nbsp;</span><span style="color: #000000;">les drones pour la livraison des colis à domicile – Déjà tester par <a href="http://www.leparisien.fr/economie/amazon-fait-un-pas-de-plus-vers-la-livraison-par-drones-en-france-18-05-2017-6959640.php">Amazon</a> &amp;<a href="http://www.lefigaro.fr/societes/2016/12/15/20005-20161215ARTFIG00171-la-poste-se-lance-dans-la-livraison-de-colis-par-drone.php"> La poste&nbsp;</a>– aussi, l’inspection, l’analyse sur des grandes superficie ou encore la surveillance (et parfois sur la route alors n’allez pas trop vite sur la</span><span style="color: #000000;">&nbsp;route). Bref, les drones représente la révolution tech par excellence.</span></p>
                <p><span style="color: #000000;">Dans quelques temps les drones seront adaptables aux transports de personnes comme l’étudie Airbus, AirFrance, Google ou encore eHang.</span></p>
                <p><span style="color: #000000;">Les drones intégreront tout les domaines. It’s the futur !&nbsp;</span></p>
                <h2><span style="color: #000000;">Un drone, oui…Mais lequel ?&nbsp;</span></h2>
                <p><span style="color: #000000;">Un exemple de classification des drones :&nbsp;</span></p>
                <ul>
                <li><span style="color: #000000;">Mini-Drone :&nbsp;&nbsp;généralement utilisé en intérieur et facile à transporter.</span></li>
                <li><span style="color: #000000;">Drone avec caméra : comme le Mavic Pro, Parrot…ce type est le plus demandé sur le&nbsp;marché, et il peut être équipé des lunettes de retransmission</span></li>
                <li><span style="color: #000000;">Drone de course : strictement encadré et demande une certaine&nbsp;habileté&nbsp;et&nbsp;de bons&nbsp;réflexes indispensables pour contrôler le drone.</span></li>
                <li><span style="color: #000000;">Drone professionnel :&nbsp; il a pour but de surveiller, contrôler et inspecter. Il peut&nbsp;survoler des agglomérations, des zones réglementées ou interdites.&nbsp;</span></li>
                <li><span style="color: #000000;">Drone militaire : c’est une autre catégorie du drone avec ses propres règles et conditions.&nbsp;</span></li>
                </ul>
                <h2><span style="color: #000000;">La réglementation de son usage !&nbsp;</span></h2>
                <p><img class="alignright wp-image-2843" src="assets/img/articles/Le drone...1 article, plusieurs réponses ! - Le Blog Droneez_files/dji-spark-drone.jpg" alt="" width="350" height="223"></p>
                <p>&nbsp;</p>
                <p><span style="color: #000000;">Comme n ‘importe quel aéronef, les drones sont réglementer par des conditions :</span></p>
                <p><span style="color: #000000;">– On ne survole pas des personnes !</span></p>
                <p><span style="color: #000000;">–&nbsp;On respecte la hauteur de 150 mètres comme maximum de vol !</span></p>
                <p><span style="color: #000000;">– On garde le drone en vue (jamais de vol de nuit )</span></p>
                <p><span style="color: #000000;">– On ne survol pas les sites sensibles et protégés comme les bases nucléaires, militaires…&nbsp;</span></p>
                <p><span style="color: #000000;">– On respecte la vie privée des autres (voisins par exemple)&nbsp;</span></p>
                <p><span style="color: #000000;"><br>
                Pour plus d’informations sur ce point, on vous propose de lire notre article détaillé sur<a href="https://www.droneez.com/blog-la-reglementation-des-drones-piloter-en-toute-securite/"> la réglementation des drones et le pilotage en sécurité.</a>&nbsp;&nbsp;</span></p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à&nbsp;liker&nbsp;notre&nbsp;<a href="https://www.facebook.com/droneez">page&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><span style="color: #000000;"><strong>Que le drone soit avec vous!</strong></span></div>
                <div style="text-align: center;"><span style="color: #000000;"><strong>L’équipe DRONEEZ</strong></span></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/06/11/" title="9 h 18 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-06-11T09:18:36+00:00">11 juin 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fle-drone-1-article-plusieurs-reponses%2F&amp;t=Le+drone...1+article%2C+plusieurs+r%C3%A9ponses+%21" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fle-drone-1-article-plusieurs-reponses%2F&amp;text=Le+drone...1+article%2C+plusieurs+r%C3%A9ponses+%21" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fle-drone-1-article-plusieurs-reponses%2F&amp;title=Le%20drone...1%20article%2C%20plusieurs%20r%C3%A9ponses%20%21&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Le%20drone...1%20article%2C%20plusieurs%20r%C3%A9ponses%20%21%20-%20https%3A%2F%2Fwww.droneez.com%2Fle-drone-1-article-plusieurs-reponses%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fle-drone-1-article-plusieurs-reponses%2F&amp;title=Le+drone...1+article%2C+plusieurs+r%C3%A9ponses+%21" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "Vous avez plusieurs questions en tête sur le drone ? à quoi cela sert au juste ?... Alors accrochez vos ceintures et tenez-vous bien ! une découverte de l'univers du drone s'impose !"},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'Le drone...1 article, plusieurs réponses ! - Le Blog Droneez'},
                    {property: 'og:description', content: "Vous avez plusieurs questions en tête sur le drone ? à quoi cela sert au juste ?... Alors accrochez vos ceintures et tenez-vous bien ! une découverte de l'univers du drone s'impose !"},
                    {property: 'og:url', content: 'https://www.droneez.com/le-drone-1-article-plusieurs-reponses/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: "c'est quoi un drone"},
                    {property: 'article:tag', content: 'drone'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'pilotage'},
                    {property: 'article:tag', content: 'questions drone'},
                    {property: 'article:tag', content: 'vol'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-06-11T09:18:36+02:00'},
                    {property: 'article:modified_time', content: '2018-06-11T14:04:33+02:00'},
                    {property: 'og:updated_time', content: '2018-06-11T14:04:33+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/06/dji-mavic-pro-avec-dji-care-1an-p-image-190597-grande.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/06/dji-mavic-pro-avec-dji-care-1an-p-image-190597-grande.jpg'},
                    {property: 'og:image:width', content: '1024'},
                    {property: 'og:image:height', content: '683'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "Vous avez plusieurs questions en tête sur le drone ? à quoi cela sert au juste ?... Alors accrochez vos ceintures et tenez-vous bien ! une découverte de l'univers du drone s'impose !"},
                    {name: 'twitter:title', content: 'Le drone...1 article, plusieurs réponses ! - Le Blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/06/s1-bg3-v2.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'le-drone-1-article-plusieurs-reponses'
            },{
                id: 12,
                title: "Un petit tour en drone avec LA MAST - Le Blog Droneez",
                content:
            `<article id="post-2761" class="vertical-fancy-style post-2761 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-initiation-drone tag-la-mast tag-marche-couvert-de-nogent-sur-oise category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="12 h 13 min" href="https://www.droneez.com/2018/05/02/" rel="nofollow"><span class="entry-month">Mai</span><span class="entry-date updated">2</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/20180428_112105.jpg" width="4032" height="2016" title="20180428_112105" alt="" srcset="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/20180428_112105.jpg" style="will-change: auto;"></div><div class="entry-content"><h3 style="text-align: center;">&nbsp;&nbsp;&nbsp;Comme toutes les belles histoires celle-ci commence par une coïncidence…</h3>
                <p style="text-align: center;"><img class="wp-image-2764 alignright" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/Logo-LA-MAST.png" alt="" width="131" height="131">Le 20 avril l’équipe de <a href="https://www.droneez.com/">DRONEEZ</a> s’interroge sur Freddy Headshot le créateur de <a href="https://www.facebook.com/coffinracerfpv/">COFFIN RACER</a> &amp; <a href="http://www.fiendship.fr/">FIENDSHIP</a>, qu’est ce qu’il fait&nbsp;? On a pas entendu parlé de ce dernier depuis un petit moment… Du coup on va fouiner sur facebook et on voit qu’il fait partie d’une initiative&nbsp;extraordinaire sur sa ville de Nogent Sur Oise.&nbsp; En effet, autodidacte, touche à tout et un vrai Mac Gyver dans l’âme Freddy fait découvrir sa passion pour les technologies, la bricole, l’imprimante 3D, la&nbsp;conception &amp; le pilotage de drone pour un service de la commune de Nogent-sur-Oise nommée «&nbsp;La MAST&nbsp;».</p>
                <p style="text-align: center;">Sur l’un des derniers postes de ce service, on voit qu’ils organisent une journée dédiée aux drones entre conception, découverte, initiation &amp; démonstration pour rendre le drone accessible à tous. Directement on écrit à Freddy en lui disant «&nbsp;Génial ton concept, hésite pas si tu as besoin de main forte on serait ravi d’aider !&nbsp;». En quelques minutes, Freddy nous appelle et nous propose de gérer l’initiation de drones pendant cet événement qui a lieu une semaine après, tout le monde se regarde dans l’équipe et on dit «&nbsp;BANCO&nbsp;» on débarque.</p>
                <p style="text-align: center;"><img class="wp-image-2771 aligncenter" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/30726015_168010237194584_6688042957510209443_n.jpg" alt="" width="353" height="500"></p>
                <h3 style="text-align: center;">Micro-préparatifs</h3>
                <p style="text-align: center;">Petite impression d’affiche pour indiquer à nos clients que le samedi 28 avril, la salle sera fermée exceptionnellement pour que nos équipes aillent aider cette initiative. Quelques coups de téléphone pour ramener du matériel, des drones, des batteries… on est embarqué dans une conversation Facebook avec <a href="https://www.fpv4drone.com/fr/">FPV4DRONES</a>, <a href="https://www.facebook.com/DOMsMOD/">DOMS</a>, <a href="http://www.fpv-passion.fr/">FRED</a> &amp; tous les futurs partenaires de l’événement ! Autant dire qu’entres blagues potaches, liens vers des vidéos et/ou du matos, la conversation est désorganisée mais on arrive tous à s’entendre pour le bon déroulement de cet événement.</p>
                <h3 style="text-align: center;">Let’s Do It</h3>
                <p style="text-align: center;">Suite à une animation le vendredi soir à Malakoff dans la salle Droneez, on finit de préparer la voiture à minuit &amp; on se donne rendez-vous à 7h du matin pour rejoindre les autres dronistes passionnés à 8h pétante ! On arrive à la salle, pas d’âmes qui vivent à la salle, on appelle Freddy, il nous dit de venir au siège de <a href="https://www.facebook.com/La-MAST-166845823977692/">LA MAST</a>. On emballe tout le reste du matériel, on prend un café qui réveille un peu tout le monde et en route pour le lieu de l’événement. Énorme salle du marché couvert de Nogent Sur Oise, avec d’ores et déjà un filet monté et un circuit de dingue pour les démonstrations.</p>
                <p style="text-align: center;">Pour bien finir de nous réveiller on enlève pas l’alarme et on se fait réveiller de nouveau avec une sirène… On retrouve un peu l’ouïe et tout le monde installe la salle, colle les stickers, met en place le reste du matériel avec en bas les initiations et en haut un stand de réparation, un stand pour acheter des drones et un atelier de montage de drones sous forme ludique.</p>
                <p style="text-align: center;"><img class="alignnone wp-image-2767" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/20180428_100806.jpg" alt="" width="244" height="183"><img class="alignnone wp-image-2770" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/20180428_091527.jpg" alt="" width="244" height="183"><img class="alignnone wp-image-2768" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/20180428_095226.jpg" alt="" width="244" height="183"></p>
                <h3 style="text-align: center;">Et c’est parti pour la journée de LA MAST</h3>
                <p style="text-align: center;">Top départ de l’événement à 10h, les gens se pressent dehors et on voit un défilé de curieux qui viennent tester, observer et découvrir le drone. Pour devoir piloter il faut passer à l’étage pour réussir un montage de drone racer brushed inventé par Freddy. Dès que les jeunes et les moins jeunes réussissent ce petit exercice ils obtiennent un ticket et viennent voir <a href="https://www.droneez.com/">DRONEEZ</a> pour découvrir une <a href="https://boutique.droneez.com/">session</a> de 5 à 10 minutes de pilotage de drones. Une petite foule s’agrège et <a href="https://www.facebook.com/La-MAST-166845823977692/">LA MAST</a> propose un atelier coloriage pour faire, sur un canevas de drone, votre drone idéal ! On avoue on a colorié un peu aussi en imaginant un drone lance flamme…On sait, on&nbsp;rêve mais ça pouvait être marrant comme nous le dit Laurent notre directeur technique.</p>
                <p style="text-align: center;">Evidemment, on ne voit pas les heures passées, beaucoup de gens ont fait le déplacement, les élus locaux trouvent le projet extraordinaire et remercient <a href="https://www.facebook.com/La-MAST-166845823977692/">LA MAST</a> &amp; surtout Freddy. Entre démonstration, explication et prise en main tout le monde passe du bon temps avec une équipe incroyable qui profite de chaque instant de cet événement.</p>
                <p style="text-align: center;">Tout d’un coup 18h00 sonnent, fin de l’événement. Les gagnants de la tombola sont annoncés, on fait un brin de ménage et on se dit que c’était une journée au top. On remercie tout le monde&nbsp;pour avoir donné de son temps !</p>
                <p style="text-align: center;">On rentre, on range et à 20h00 on se dit «&nbsp;<strong>Freddy il est vraiment génial ce mec</strong>&nbsp;» ! On le remercie par message, email, signaux de fumée…Juste pour lui dire qu’on a pas regretté d’avoir fermé la salle et d’avoir passé une journée super bien organisée et avec une ambiance aussi géniale.</p>
                <p style="text-align: center;">Au nom de toute l’équipe, Freddy Headshot un GRAND Merci pour tout ce que tu fais &amp; un grand merci à <a href="https://www.facebook.com/La-MAST-166845823977692/">LA MAST</a> pour cet événement.</p>
                <p style="text-align: center;">Pour tous les autres partenaires, <a href="http://www.fiendship.fr/">FIENDSHIP</a>,&nbsp;<a href="https://www.fpv4drone.com/fr/">FPV4DRONE</a>, <a href="http://www.fpv-passion.fr/">FPV PASSION</a>,&nbsp;<a href="https://www.facebook.com/DOMsMOD/">DOMS</a> vous avez été au top et on est là pour intervenir dans ce type d’initiatives.</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><img class="size-medium wp-image-2772 alignleft" src="assets/img/articles/Un petit tour en drone avec LA MAST - Le Blog Droneez_files/31530353_170853073576967_4514240509576429073_n.jpg" alt="" width="169" height="300"></p>
                <p>&nbsp;</p>
                <p style="text-align: center;">Freddy !</p>
                <p style="text-align: center;">Un grand Merci de</p>
                <p style="text-align: center;">nous avoir convié</p>
                <p style="text-align: center;">et un énorme</p>
                <p style="text-align: center;">BRAVO !</p>
                <p style="text-align: center;">Pour information, Freddy c’est une personne discrète que vous avez surement vue si vous vous intéressez aux drones ! Un grand barbu tatoué avec une passion dévorante pour la technologie.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à <a style="color: #000000;">liker</a> notre&nbsp;page&nbsp;Facebook&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a> !<br>
                </span></p>
                <p style="text-align: center;"><span style="color: #000000;">Et ne manquez pas de jeter un coup d’œil&nbsp;sur notre site <a href="https://www.droneez.com/">Droneez.com</a></span><span style="color: #000000;">&nbsp;</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !!!</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/05/02/" title="12 h 13 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-05-02T12:13:55+00:00">2 mai 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fun-petit-tour-en-drone-avec-la-mast%2F&amp;t=Un+petit+tour+en+drone+avec+LA+MAST" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fun-petit-tour-en-drone-avec-la-mast%2F&amp;text=Un+petit+tour+en+drone+avec+LA+MAST" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fun-petit-tour-en-drone-avec-la-mast%2F&amp;title=Un%20petit%20tour%20en%20drone%20avec%20LA%20MAST&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Un%20petit%20tour%20en%20drone%20avec%20LA%20MAST%20-%20https%3A%2F%2Fwww.droneez.com%2Fun-petit-tour-en-drone-avec-la-mast%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fun-petit-tour-en-drone-avec-la-mast%2F&amp;title=Un+petit+tour+en+drone+avec+LA+MAST" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "A Nogent-sur-Oise le 28 avril 2018, LA MAST et Freddy Headshot fondateur de Coffin Racer &amp; Fiendship ont organisé une manifestation pour faire découvrir le drone depuis la théorie jusqu'à la pratique en passant par des démonstrations avec une équipe extraordinaire !"},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'Un petit tour en drone avec LA MAST - Le Blog Droneez'},
                    {property: 'og:description', content: "A Nogent-sur-Oise le 28 avril 2018, LA MAST et Freddy Headshot fondateur de Coffin Racer &amp; Fiendship ont organisé une manifestation pour faire découvrir le drone depuis la théorie jusqu'à la pratique en passant par des démonstrations avec une équipe extraordinaire !"},
                    {property: 'og:url', content: 'https://www.droneez.com/un-petit-tour-en-drone-avec-la-mast/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'Initiation drone'},
                    {property: 'article:tag', content: 'LA MAST'},
                    {property: 'article:tag', content: 'Marché couvert de Nogent Sur Oise'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-05-02T12:13:55+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:47:49+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:47:49+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/05/Logo-LA-MAST.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/05/Logo-LA-MAST.png'},
                    {property: 'og:image:width', content: '320'},
                    {property: 'og:image:height', content: '320'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "A Nogent-sur-Oise le 28 avril 2018, LA MAST et Freddy Headshot fondateur de Coffin Racer &amp; Fiendship ont organisé une manifestation pour faire découvrir le drone depuis la théorie jusqu'à la pratique en passant par des démonstrations avec une équipe extraordinaire !"},
                    {name: 'twitter:title', content: 'Un petit tour en drone avec LA MAST - Le Blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/05/20180428_112105.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'un-petit-tour-en-drone-avec-la-mast'
            },{
                id: 11,
                title: "la première école de pilotage de drones à 5 minutes de Paris&nbsp;! - Le blog Droneez",
                content:
            `<article id="post-2739" class="vertical-fancy-style post-2739 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-drone tag-droneez tag-ecole-pilotage-paris tag-formation-pilotage tag-pilotage-drone tag-vol-drone category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="15 h 50 min" href="https://www.droneez.com/2018/04/24/" rel="nofollow"><span class="entry-month">Avr</span><span class="entry-date updated">24</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/la première école de pilotage de drones à 5 minutes de Paris ! - Le blog Droneez_files/Capture.jpg" width="790" height="395" title="Drone" alt="" srcset="assets/img/articles/la première école de pilotage de drones à 5 minutes de Paris ! - Le blog Droneez_files/Capture.jpg" style="will-change: auto;"></div><div class="entry-content"><h1 style="text-align: center;"><span style="color: #000000;">Elle est enfin arrivée&nbsp;:</span></h1>
                <h1 style="text-align: center;"><span style="color: #000000;">la première école de pilotage de drones à 5 minutes de Paris&nbsp;!</span></h1>
                <p>&nbsp;</p>
                <p><span style="color: #000000;">Nous étions connus par nos activités axées plutôt «&nbsp;loisirs&nbsp;»&nbsp;: de sessions de découverte, de séances de FPV, de courses endiablées, de cocktail dinatoire. Jusqu’à 2h du matin car oui chez Droneez le fun, le ludique et le décalé on sait faire, mais pas que&nbsp;!</span></p>
                <p><span style="color: #000000;">Fort de notre expérience depuis bientôt 2 ans dans les animations grands publics, nous souhaitions aussi nous lancer dans les formations professionnelles de télé-pilote avec une formation de 35h. Là ça devient sérieux !</span></p>
                <p><span style="color: #000000;"><strong><em>Pourquoi&nbsp;?</em></strong> Et bien parce que nous sommes convaincus que d’ici quelques années le permis de télépilote de drone sera presque aussi important que le permis de conduire.</span></p>
                <p><span style="color: #000000;"><strong><em>Un permis&nbsp;?</em></strong> Oui oui un permis, car il faut plus exactement une licence (plus précisément) délivrée aujourd’hui par la DGAC (Direction Générale de l’Aviation Civile) pour être autorisé à faire des décollages de n’importe où et pouvoir ensuite vendre ses prises (photos et vidéos) ou ses analyses de terrains etc. D’ailleurs bientôt les amateurs devront aussi passer une sorte de «&nbsp;code&nbsp;» pour les appareils de plus de 800 grammes (avec batterie). La réglementation commence et attention si vous ne la suivez pas.</span></p>
                <p><span style="color: #000000;">Pas de licence = pas de vol, dans Paris ou dans d’autres villes, pas de vidéo Youtube (snif!). Bref, pas de vol en dehors de chez soi, de son jardin ou de chez Droneez. Oui on fait aussi du #PlacementDeProduit !&nbsp;</span></p>
                <p>&nbsp;</p>
                <h2><span style="color: #000000;">Une formation professionnelle pour pouvoir obtenir une licence professionnelle de télé-pilote, ça correspond à quoi du coup&nbsp;?</span></h2>
                <p><span style="color: #000000;"><strong><em>En premier lieu&nbsp;:</em></strong> une prise en main simple de la manette sur un petit drone assisté (altitude hold) et une première compréhension des mouvements du drone dans les airs. Puis on augmente la difficulté au fur et à mesure&nbsp;avec un drone de plus en plus puissant. U</span><span style="color: #000000;">n pilotage à vue puis en retour caméra, le drone à l’envers et en FPV pur sur un circuit compliqué, sans les mains, etc… Histoire que lorsque que les stagiaires seront en conditions réelles avec leur client qui leur parle en même temps qu’ils pilotent ils soient complètement à l’aise.</span></p>
                <p><span style="color: #000000;"><em><strong>En second point&nbsp;:</strong></em> une formation théorique, sur les Lipo (les batteries), la réglementation, comment faire une demande d’autorisation de décollage à la préfecture, les vérifications obligatoires avant un vol et se préparer au brevet théorique ULM. Qui sera bientôt (début Juillet normalement) remplacé par un brevet théorique Drone.</span></p>
                <p>&nbsp;</p>
                <h2><span style="color: #000000;">En trois mots&nbsp;: une formation complète&nbsp;!</span></h2>
                <p><span style="color: #000000;">Pour que lorsque nos stagiaires sortent de notre école, soient crédibles face à leurs clients et qu’ils prennent plaisir à piloter par la suite.</span></p>
                <p><span style="color: #000000;"><em><strong>D’ailleurs les clients c’est qui&nbsp;?</strong></em> C’est vous : les photographes qui souhaitez faire de magnifiques photos de mariage, de voyages, de vacances et de paysages. Vous les sportifs qui souhaitez filmer vos exploits et ceux de vos potes en snowboard, ski, surf, kitesurf, avérons, athlétisme, etc… Vous les journalistes, les chômeurs en reconversion, les entrepreneurs touche-à-tout et les pilotes passionnées qui veulent aller plus loin dans leur passion&nbsp;!</span></p>
                <p>&nbsp;</p>
                <p><span style="color: #000000;">Pour en savoir plus suivez le lien&nbsp;:</span> <a href="https://boutique.droneez.com/reservations/11-telepilot.html">https://boutique.droneez.com/reservations/11-telepilot.html</a></p>
                <p>&nbsp;</p>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/04/24/" title="15 h 50 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-04-24T15:50:56+00:00">24 avril 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fpilotage-drones-paris%2F&amp;t=la+premi%C3%A8re+%C3%A9cole+de+pilotage+de+drones+%C3%A0+5+minutes+de+Paris%C2%A0%21" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fpilotage-drones-paris%2F&amp;text=la+premi%C3%A8re+%C3%A9cole+de+pilotage+de+drones+%C3%A0+5+minutes+de+Paris%C2%A0%21" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fpilotage-drones-paris%2F&amp;title=la%20premi%C3%A8re%20%C3%A9cole%20de%20pilotage%20de%20drones%20%C3%A0%205%20minutes%20de%20Paris%C2%A0%21&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=la%20premi%C3%A8re%20%C3%A9cole%20de%20pilotage%20de%20drones%20%C3%A0%205%20minutes%20de%20Paris%C2%A0%21%20-%20https%3A%2F%2Fwww.droneez.com%2Fpilotage-drones-paris%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fpilotage-drones-paris%2F&amp;title=la+premi%C3%A8re+%C3%A9cole+de+pilotage+de+drones+%C3%A0+5+minutes+de+Paris%C2%A0%21" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: 'Nous étions connus pour nos activités axées plutôt «&nbsp;loisirs&nbsp;»&nbsp;: de sessions de découverte, de séances de FPV, de courses endiablées, de cocktail dinatoire jusqu’à 2h du matin, car oui chez Droneez le fun, le ludique, le décalé on sait faire, mais pas que&nbsp;!'},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'la première école de pilotage de drones à 5 minutes de Paris&nbsp;! - Le blog Droneez'},
                    {property: 'og:description', content: 'Nous étions connus pour nos activités axées plutôt «&nbsp;loisirs&nbsp;»&nbsp;: de sessions de découverte, de séances de FPV, de courses endiablées, de cocktail dinatoire jusqu’à 2h du matin, car oui chez Droneez le fun, le ludique, le décalé on sait faire, mais pas que&nbsp;!'},
                    {property: 'og:url', content: 'https://www.droneez.com/pilotage-drones-paris/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'drone'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'école pilotage paris'},
                    {property: 'article:tag', content: 'formation pilotage'},
                    {property: 'article:tag', content: 'pilotage drone'},
                    {property: 'article:tag', content: 'vol drone'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-04-24T15:50:56+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:41+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:41+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/04/Capture.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/04/Capture.jpg'},
                    {property: 'og:image:width', content: '790'},
                    {property: 'og:image:height', content: '451'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'Nous étions connus pour nos activités axées plutôt «&nbsp;loisirs&nbsp;»&nbsp;: de sessions de découverte, de séances de FPV, de courses endiablées, de cocktail dinatoire jusqu’à 2h du matin, car oui chez Droneez le fun, le ludique, le décalé on sait faire, mais pas que&nbsp;!'},
                    {name: 'twitter:title', content: 'la première école de pilotage de drones à 5 minutes de Paris&nbsp;! - Le blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/04/Capture.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'pilotage-drones-paris'
            },{
                id: 10,
                title: "DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez",
                content:
            `<article id="post-2679" class="vertical-fancy-style post-2679 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-dji tag-drone-vol tag-droneez tag-ryze-tello tag-salle-indoor tag-studiosport category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="15 h 25 min" href="https://www.droneez.com/2018/04/12/" rel="nofollow"><span class="entry-month">Avr</span><span class="entry-date updated">12</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/MAH02801.MP4.00_00_50_42.Image-fixe005.jpg" width="1920" height="960" title="droneez_ryze_tello_1" alt="" srcset="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/MAH02801.MP4.00_00_50_42.Image-fixe005.jpg" style="will-change: auto;"></div><div class="entry-content"><h1 style="text-align: center;">&nbsp;RYZE TELLO, LE LANCEMENT AVEC</h1>
                <h1 style="text-align: center;">STUDIOSPORT &amp; DRONEEZ !</h1>
                <p>&nbsp;</p>
                <h2 style="text-align: center;">Le Lancement d’un drone en France chez DRONEEZ :</h2>
                <p>&nbsp;</p>
                <p style="text-align: center;">Le week-end dernier, samedi 7 avril, outre le beau temps qui a fait son apparition et qui a égayé vos journées. Il y avait aussi… Le lancement du nouveau <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Ryze Tello</a> et cela se passer dans notre salle à Malakoff !</p>
                <p style="text-align: center;">Une superbe équipe de <a href="https://www.studiosport.fr/">studioSPORT</a> &amp; <a href="https://www.dji-paris.com/">DJI</a> est venue nous prêter main forte et cela a été plus que nécessaire. En effet, entre 10h et 16h nous avons accueilli plus de 200 personnes et certains étaient là dès 9h30.</p>
                <h1 style="text-align: center;"><img class="alignnone wp-image-2703" src="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/DSC01540.jpg" alt="" width="360" height="203"><img class="alignnone wp-image-2704" style="font-size: 14px; font-weight: normal;" src="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/IMG-20180407-WA0001.jpeg" alt="" width="359" height="202"></h1>
                <p style="text-align: center;">En conclusion, un énorme engouement pour tester ce nouveau drone assisté par ordinateur.</p>
                <p>&nbsp;</p>
                <h2 style="text-align: center;">Une présentation rapide d’un drone à la portée de tous comme notre objectif :</h2>
                <p style="text-align: center;">Des blogueurs, des journalistes, des geeks &amp; même des curieux sont venus tester ce drone de 80 grammes qui tient dans la main avec une bonne autonomie de plus de 10 minutes. Il est contrôlable avec une application <a href="https://www.dji-paris.com/">DJI</a> nommée <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Tello</a> et compatible avec les contrôleurs et les casques de retransmission de la même marque. Toutefois, le contrôleur de vol est aussi performant que les autres produits de cette marque et sont comportant de drone stabilisé &amp; assisté d’un ordinateur est extrêmement intuitif.</p>
                <p style="text-align: center;">D’un point de vue de pilotage, un pilotage intuitif qui ravira de nouveaux pilotes pour mieux comprendre la manette. Des modes ont été ajoutés pour pouvoir contrôler des flips avec un slide de votre doigt. Le mode bound permets au drone de faire des oscillations et un mode «&nbsp;donut&nbsp;» permets de faire le cercle autour de la manette. Tout est programmé pour une pilotage souple et facile.</p>
                <p>&nbsp;</p>
                <p><img class="wp-image-2700 alignright" style="font-size: 14px; font-weight: normal;" src="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/MAH02801.MP4.00_01_44_47.Image-fixe006.jpg" alt="" width="575" height="324">Les capacités annoncées sont de 100 mètres de portée &amp; 10 mètres d’altitude avec une connexion WIFI. Une super bonne affaire pour découvrir le drone sous toutes ses coutures entre le vol à vue, le FPV ou la prise de vue avec la caméra. Cette dernière est une caméra de 5 mégapixels avec un grand angle et stabilisateur pour faire des vidéos intuitives et avec un bon rendu.</p>
                <p style="text-align: center;">Enfin le pilotage FPV est réactif même en appairage Wifi avec une bonne réactivité et une caméra d’une qualité incroyable.</p>
                <p>&nbsp;</p>
                <p style="text-align: center;">Les obstacles sont évités avec un processeur Intel pour décoller automatiquement, se stabiliser et éviter les objets qui l’entourent. Un côté fun a été ajouté, un inédit pour un quad assisté par ordinateur… Il peut décoller en se lançant et atterrir dans la main du pilotage.</p>
                <p>&nbsp;</p>
                <h2 style="text-align: center;">Un apprentissage du codage via DJI Block :</h2>
                <p><img class="wp-image-2699 aligncenter" src="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/MAH02801.MP4.00_02_15_49.Image-fixe007.jpg" alt="" width="408" height="229"></p>
                <p style="text-align: center;">Pour encore plus s’approcher du développement digital, le <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Tello</a> peut être contrôler via Scratch un outil du MIT pour mettre en lien des instructions données au programme avec des blocs qui se clipsent et s’enchaînent entre eux. Une facilité déconcertante pour donner des instructions et apprendre les bases de l’algorithmique et du codage.</p>
                <p style="text-align: center;">De plus un SDK est disponible pour booster votre <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Tello</a> et l’améliorer en fonction des nouveautés de l’équipe <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Ryze Tello</a>.</p>
                <p style="text-align: center;">On ne sera jamais à l’abris des surprises avec le nouveau <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Ryze Tello</a>.</p>
                <p>&nbsp;</p>
                <h2 style="text-align: center;">Des moments de détentes avec des pilotes pour cet événement :</h2>
                <h1 style="text-align: center;"><img class="wp-image-2702 alignleft" src="assets/img/articles/DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez_files/IMG_20180407_192235_117.jpg" alt="" width="320" height="320"></h1>
                <p style="text-align: center;">Bien évidemment, en mangeant à 13h30 un burger en moins de 30 secondes, nous avons eu quelques minutes pour faire tester aux équipes présentes, <a href="https://www.studiosport.fr/">studioSPORT</a> &amp;</p>
                <p style="text-align: center;">, notre piste de course indoor et les décrassages de drones 65 &amp; 100mm ont été intenses. De nombreuses batteries, peu de casse, mais de bonnes sensations pour tout le monde entre le TinyWhoop ou des racers de 100mm.</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><strong>Les quinze minutes de répits ont été plus que rentabilisées.</strong></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style="text-align: center;">Un grand merci à toutes les personnes qui se sont déplacées, et un grand merci à <a href="https://www.dji-paris.com/">DJI</a> &amp; <a href="https://www.studiosport.fr/">studioSPORT</a> &nbsp;pour cet événement rondement mené !</p>
                <p style="text-align: center;">A très vite chez Droneez, et si vous voulez tester le <a href="https://www.studiosport.fr/drones/dji/tello-c2482.html">Tello</a> on en a gardé un en stock.</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à&nbsp;liker&nbsp;notre&nbsp;<a style="color: #000000;">page</a>&nbsp;Facebook&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !!!</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                <div></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/04/12/" title="15 h 25 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-04-12T15:25:14+00:00">12 avril 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello%2F&amp;t=Lancement+du+Ryze+TELLO+chez+DRONEEZ+%21" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello%2F&amp;text=Lancement+du+Ryze+TELLO+chez+DRONEEZ+%21" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello%2F&amp;title=Lancement%20du%20Ryze%20TELLO%20chez%20DRONEEZ%20%21&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Lancement%20du%20Ryze%20TELLO%20chez%20DRONEEZ%20%21%20-%20https%3A%2F%2Fwww.droneez.com%2Fdji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello%2F&amp;title=Lancement+du+Ryze+TELLO+chez+DRONEEZ+%21" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                        {name: 'description', content: 'Le week-end dernier, le samedi 7 avril, outre le beau temps qui a fait son apparition et qui a égayé vos journées, il y avait aussi... Le lancement du nouveau Ryze Tello et cela se passer dans notre salle à Malakoff !'},
                        {property: 'og:locale', content: 'fr_FR'},
                        {property: 'og:type', content: 'article'},
                        {property: 'og:title', content: 'DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez'},
                        {property: 'og:description', content: 'Le week-end dernier, le samedi 7 avril, outre le beau temps qui a fait son apparition et qui a égayé vos journées, il y avait aussi... Le lancement du nouveau Ryze Tello et cela se passer dans notre salle à Malakoff !'},
                        {property: 'og:url', content: 'https://www.droneez.com/dji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello/'},
                        {property: 'og:site_name', content: 'Droneez'},
                        {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                        {property: 'article:tag', content: 'dji'},
                        {property: 'article:tag', content: 'drone vol'},
                        {property: 'article:tag', content: 'droneez'},
                        {property: 'article:tag', content: 'ryze tello'},
                        {property: 'article:tag', content: 'salle indoor'},
                        {property: 'article:tag', content: 'studiosport'},
                        {property: 'article:section', content: 'Evenements'},
                        {property: 'article:published_time', content: '2018-04-12T15:25:14+02:00'},
                        {property: 'article:modified_time', content: '2018-08-29T12:02:16+02:00'},
                        {property: 'og:updated_time', content: '2018-08-29T12:02:16+02:00'},
                        {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/04/MAH02801.MP4.00_00_50_42.Image-fixe005.jpg'},
                        {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/04/MAH02801.MP4.00_00_50_42.Image-fixe005.jpg'},
                        {property: 'og:image:width', content: '1920'},
                        {property: 'og:image:height', content: '1080'},
                        {name: 'twitter:card', content: 'summary_large_image'},
                        {name: 'twitter:description', content: 'Le week-end dernier, le samedi 7 avril, outre le beau temps qui a fait son apparition et qui a égayé vos journées, il y avait aussi... Le lancement du nouveau Ryze Tello et cela se passer dans notre salle à Malakoff !'},
                        {name: 'twitter:title', content: 'DJI &amp; Studiosport chez DRONEEZ pour le lancement du Ryze TELLO ! - Le Blog Droneez'},
                        {name: 'twitter:site', content: '@DRONEEZ_fr'},
                        {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/04/MAH02801.MP4.00_00_50_42.Image-fixe005.jpg'},
                        {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                        {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'dji-et-studiosport-chez-droneez-pour-le-lancement-du-ryze-tello'
            },{
                id: 9,
                title: "Droneez au siège de la Poste - Le Blog de Droneez",
                content:
            `<article id="post-2473" class="vertical-fancy-style post-2473 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-drone tag-drone-a-la-poste tag-droneez tag-paris tag-pilotage category-35 category-36 description-off">
                <div class="post-thumbnail layzr-bg-transparent"><div class="fancy-date"><a title="13 h 52 min" href="https://www.droneez.com/2018/02/12/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">12</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Droneez au siège de la Poste - Le Blog de Droneez_files/Capture2.png" width="624" height="312" title="Capture2" alt="" srcset="assets/img/articles/Droneez au siège de la Poste - Le Blog de Droneez_files/Capture2.png" style="will-change: auto;"></div><div class="entry-content"><div style="text-align: center;">
                <p>&nbsp;</p>
                <h2 style="text-align: left;"><span style="color: #000000;"><b>Des drones qui volaient au siège&nbsp;de la Poste!</b></span></h2>
                <p>&nbsp;</p>
                <p style="text-align: left;"><span style="color: #000000;">Le 22 et 23 mars 2017, le drone était l’invité VIP au siège de la Poste. Lors d’un événement chaleureux qui a rassemblé plus de 50 personnes afin de partager la passion des «&nbsp;oiseaux programmés&nbsp;». Et bien sur, l’équipe&nbsp;</span><span style="color: #000000;">Droneez est la meilleure pour ce type d’événement.&nbsp;</span><span style="color: #000000;">partager. «&nbsp;Comme débutant, j’ai eu quelques crashes mais ça reste une expérience extraordinaire!&nbsp;» révéler Hugo âgé de 23 ans accompagner de son amie Camille. «&nbsp;J’avais aucune idée avant sur les drones mais maintenant je m’éclate en pilotant même si mon drone a subi quelques accidents! c’était une expérience amusante à partager entre participants&nbsp;» ajoutant la jeune en souriant.&nbsp; &nbsp;&nbsp;</span></p>
                <p style="text-align: left;"><span style="color: #000000;">L’équipe Droneez a partagé un super moment avec les participants au siège. Des sessions de pilotage sous forme de compétition entre des groupes de 5 personnes, pour augmenter l’ambiance et ajouter une touche de challenge. Ainsi qu’échanger et partager avec des professionnels l’actualité de l’univers du drone en France.</span></p>
                <p style="text-align: left;"><span style="color: #000000;">Pour Droneez cet événement réussi à 100%&nbsp;ne serait surement&nbsp;pas le dernier avec le groupe la Poste et personne ne peut nier l’ambiance partagée et les échanges intéressants&nbsp;entre l’équipe et les participants qui ont exprimer leur intérêt au monde du drone sans oublier les personnes qui étaient très motivés et intéressés par une formation&nbsp;professionnalisante chez Droneez pour pouvoir&nbsp; piloter pour le «&nbsp;fun&nbsp;» en toute liberté et autonomie ou bien prendre des belles photos en vacance avec la touche professionnelle des drones de photographie type PHANTOM ou PARROT.&nbsp;</span></p>
                </div>
                <p><span style="color: #000000;">Enfin quelques photos pour illustrer cette belle expérience :&nbsp;</span></p>
                <div style="text-align: center;">&nbsp;<img class="aligncenter wp-image-2586" title=" Droneez au siège de la Poste " src="assets/img/articles/Droneez au siège de la Poste - Le Blog de Droneez_files/Sans-titre-1.jpg" alt="" width="600" height="400"><strong style="text-align: center;">Droneez au siège de la Poste&nbsp;</strong></div>
                <div>
                <div></div>
                <div></div>
                </div>
                <div><span style="color: #000000;">Alors si vous avez aussi envie de tester les drones et vivre l’expérience en 3D. Avec vos amis(es), votre famille ou bien entre collègues en team-building: Rendez-vous sur&nbsp;<a href="https://www.droneez.com/" target="_blank" rel="noopener">https://www.droneez.com</a><a href="https://www.droneez.com/">&nbsp;</a></span></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                <div></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/02/12/" title="13 h 52 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-02-12T13:52:37+00:00">12 février 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-siege-de-la-poste-2%2F&amp;t=Droneez+au+si%C3%A8ge+de+la+Poste+pour+2+jours+de+pilotage+de+drone" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-siege-de-la-poste-2%2F&amp;text=Droneez+au+si%C3%A8ge+de+la+Poste+pour+2+jours+de+pilotage+de+drone" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-siege-de-la-poste-2%2F&amp;title=Droneez%20au%20si%C3%A8ge%20de%20la%20Poste%20pour%202%20jours%20de%20pilotage%20de%20drone&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Droneez%20au%20si%C3%A8ge%20de%20la%20Poste%20pour%202%20jours%20de%20pilotage%20de%20drone%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-siege-de-la-poste-2%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-siege-de-la-poste-2%2F&amp;title=Droneez+au+si%C3%A8ge+de+la+Poste+pour+2+jours+de+pilotage+de+drone" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: 'Le 22 et 23 mars 2017 à la Poste, Droneez a accueilli plus de&nbsp;50 personnes pour des initiations au pilotage de drone. Un moment convivial par excellence partager entre les participants, à refaire!'},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'Droneez au siège de la Poste - Le Blog de Droneez'},
                    {property: 'og:description', content: 'Le 22 et 23 mars 2017 à la Poste, Droneez a accueilli plus de&nbsp;50 personnes pour des initiations au pilotage de drone. Un moment convivial par excellence partager entre les participants, à refaire!'},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-droneez-au-siege-de-la-poste-2/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'drone'},
                    {property: 'article:tag', content: 'drone à la poste'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'paris'},
                    {property: 'article:tag', content: 'pilotage'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-02-12T13:52:37+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:42+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:42+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/Capture2.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/02/Capture2.png'},
                    {property: 'og:image:width', content: '624'},
                    {property: 'og:image:height', content: '349'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'Le 22 et 23 mars 2017 à la Poste, Droneez a accueilli plus de&nbsp;50 personnes pour des initiations au pilotage de drone. Un moment convivial par excellence partager entre les participants, à refaire!'},
                    {name: 'twitter:title', content: 'Droneez au siège de la Poste - Le Blog de Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/Capture2.png'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-droneez-au-siege-de-la-poste-2'
            },{
                id: 8,
                title: "DRONEEZ au Second Square Makers - Le Blog de Droneez",
                content:
           `<article id="post-2469" class="vertical-fancy-style post-2469 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-drone tag-drone-paris tag-droneez tag-second-square category-35 category-36 description-off">
                <div class="post-thumbnail layzr-bg-transparent"><div class="fancy-date"><a title="12 h 48 min" href="https://www.droneez.com/2018/02/12/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">12</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/FireShot-Capture-17-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" width="626" height="313" title="FireShot Capture 17 – Mon Compte I Wix.com_ – https___www.wix.com_my-account_sit" alt="" srcset="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/FireShot-Capture-17-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" style="will-change: auto;"></div><div class="entry-content"><div style="text-align: center;"><span style="color: #000000;"><b>Du 9 au 12 Février 2017 DRONEEZ était au Carreau du Temple</b></span></div>
                <div style="text-align: center;"><span style="color: #000000;"><b>pour le Second Square&nbsp;Makers</b></span></div>
                <div style="text-align: center;"><span style="color: #000000;">&nbsp;</span></div>
                <div style="text-align: center;"><span style="color: #000000;">Nous avons reçu plus de 200 personnes par jour dans notre cage de 50 m2 confectionnée spécialement pour l’occasion <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/1f609.svg"></span></div>
                <div style="text-align: center;"></div>
                <div><img class="aligncenter wp-image-2470 size-full" title="DRONEEZ au Second Square Makers 1" src="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/FireShot-Capture-17-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" alt="" width="626" height="350" srcset="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/1f609.svg"></span></div>
                <div style="text-align: center;"></div>
                <div><img class=" sizes="(max-width: 380px) 60.702875399361vw,(max-width: 500px) 79.872204472843vw,(max-width: 660px) 105.43130990415vw,(max-width: 800px) 127.79552715655vw,626px"></div>
                <div></div>
                <div><img class="aligncenter wp-image-2471 size-full" title="DRONEEZ au Second Square Makers 2" src="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/FireShot-Capture-18-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" alt="" width="626" height="352" srcset="assets/img/articles/DRONEEZ au Second Square Makers - Le Blog de Droneez_files/FireShot-Capture-18-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" sizes="(max-width: 380px) 60.702875399361vw,(max-width: 500px) 79.872204472843vw,(max-width: 660px) 105.43130990415vw,(max-width: 800px) 127.79552715655vw,626px"></div>
                <h4 style="text-align: center;">&nbsp;– DRONEEZ au Second Square Makers –</h4>
                <div></div>
                <div><span style="color: #000000;">Au fur et à mesure de la journée, nous avons eu de nombreuses personnes qui sont revenues et voulaient parfaire leur pilotage de drones suite à la séance de la veille.</span></div>
                <div><span style="color: #000000;">Une journée forte en émotion pour présenter des drones de courses difficiles à prendre en main. Mais dont les mouvements offrent de très grandes opportunités de mouvement comparées aux drones assistées par ordinateurs. D’ailleurs notre partenaire Parrot a pu réaliser des démonstrations, et des optimisations du Bebop 2 dans notre cage de quelques mètres carrés.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;">Les gates lumineuses au fur et à mesure de la journée ont été défiées par des apprentis pilotes. Dont le défi était de pouvoir passer dans un des cerceaux après une quinzaine de minutes d’initiation. De nombreuses personnes ont été déçues, car le timing était un peu restreint au vu des 500 personnes que nous avons pu faire toucher le monde du drone. Les personnes nous demandent rapidement : quand nous pourrons ouvrir notre salle !. Mais en attendant les séances que nous réalisons dans les Urban Soccer semblent les intéresser.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;">Nous avons en fin pu faire tester aux autres makers le pilotage de drones. Même pour ces accros de la technologie et des projets innovants voir robotique. La gestion d’un drone non assisté par un ordinateur semble être complexe, mais en plusieurs batteries on a vu l’évolution pour les meilleurs d’entres eux. On espère pouvoir continuer à faire partager notre passion du drone pour eux dans les prochains mois ou les prochains salons où nous serons invités…Peut-être la Paris Games Week ou Vivatech…L’avenir nous le dira !</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;">Si vous êtes passés par notre stand durant ces quelques jours, nous vous en remercions, n’hésitez pas à nous suivre et à vous abonner sur notre site<a href="https://www.droneez.com/"> www.droneez.com.</a></span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div></div>
                <div>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div>
                <p>&nbsp;</p>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/02/12/" title="12 h 48 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-02-12T12:48:25+00:00">12 février 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-second-square-makers-dans-le-carreau-du-temple%2F&amp;t=DRONEEZ+au+Second+Square+Makers+dans+le+Carreau+du+Temple" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-second-square-makers-dans-le-carreau-du-temple%2F&amp;text=DRONEEZ+au+Second+Square+Makers+dans+le+Carreau+du+Temple" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-second-square-makers-dans-le-carreau-du-temple%2F&amp;title=DRONEEZ%20au%20Second%20Square%20Makers%20dans%20le%20Carreau%20du%20Temple&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=DRONEEZ%20au%20Second%20Square%20Makers%20dans%20le%20Carreau%20du%20Temple%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-second-square-makers-dans-le-carreau-du-temple%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-au-second-square-makers-dans-le-carreau-du-temple%2F&amp;title=DRONEEZ+au+Second+Square+Makers+dans+le+Carreau+du+Temple" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "Du 9 au 12 Février 2017 DRONEEZ était au Carreau du Temple pour le Second Square&nbsp;Makers. Nous avons reçu plus de 200 personnes par jour dans notre cage de 50 m2 confectionnée spécialement pour l'occasion."},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'DRONEEZ au Second Square Makers - Le Blog de Droneez'},
                    {property: 'og:description', content: "Du 9 au 12 Février 2017 DRONEEZ était au Carreau du Temple pour le Second Square&nbsp;Makers. Nous avons reçu plus de 200 personnes par jour dans notre cage de 50 m2 confectionnée spécialement pour l'occasion."},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-droneez-au-second-square-makers-dans-le-carreau-du-temple/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'drone'},
                    {property: 'article:tag', content: 'drone paris'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'second square'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-02-12T12:48:25+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:42+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:42+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/FireShot-Capture-17-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/02/FireShot-Capture-17-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png'},
                    {property: 'og:image:width', content: '626'},
                    {property: 'og:image:height', content: '350'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "Du 9 au 12 Février 2017 DRONEEZ était au Carreau du Temple pour le Second Square&nbsp;Makers. Nous avons reçu plus de 200 personnes par jour dans notre cage de 50 m2 confectionnée spécialement pour l'occasion."},
                    {name: 'twitter:title', content: 'DRONEEZ au Second Square Makers - Le Blog de Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/FireShot-Capture-17-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-droneez-au-second-square-makers-dans-le-carreau-du-temple'
            },{
                id: 7,
                title: "A chaque histoire un début - Le Blog de Droneez",
                content:
            `<article id="post-2460" class="vertical-fancy-style post-2460 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-histoire-droneez tag-pilotage-drone category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="16 h 54 min" href="https://www.droneez.com/2018/02/09/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">9</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Droneez _A chaque histoire un début_ - Le Blog de Droneez_files/Posteasypeazy-2.jpg" width="1080" height="540" title="Posteasypeazy 2" alt="" srcset="assets/img/articles/Droneez _A chaque histoire un début_ - Le Blog de Droneez_files/Posteasypeazy-2.jpg" style="will-change: auto;"></div><div class="entry-content"><p><span style="color: #000000;">Chaque entreprise, a une histoire. Et chaque histoire à un début.</span></p>
                <p><span style="color: #000000;"> Le début de Droneez est : Matthieu Perillaud&nbsp;et Sabri&nbsp;El Fani.</span></p>
                <p><span style="color: #000000;">Les deux amis ce sont rencontrés sur les bancs de l’école de chimie et une grande amitié s’est rapidement créée. Après </span><span style="color: #000000;">l’obtention de leur diplôme, les deux trublions ont pris des chemins différents :</span><br>
                <span style="color: #000000;"> Sabri se lance dans une carrière de trader de matières premières chimiques tandis que Matthieu s’intéresse déjà à l’entrepreneuriat (SELECTIONNIST, SOS JOBER).</span><br>
                <span style="color: #000000;"> Cependant&nbsp;l’envie de mener un projet ensemble était toujours là, inassouvie, alors quand Sabri a quitté sa précédente vie c’était pour mieux plonger dans la piscine des start-up et&nbsp;avec à ses côtés son ami de toujours. L’idée de Droneez est venu dans la foulée !&nbsp;</span></p>
                <p><span style="color: #000000;">S’envoler en l’air en mode drone, était toujours la passion des deux geek et avec Droneez elle est devenu un métier et un plaisir à partager.&nbsp;&nbsp;</span></p>
                <p><span style="color: #000000;">Au début, Droneez s’est installé sur Ivry pour une bonne période. Mais avec l’évolution du projet il fallait trouver un local plus grand et bien situer dans la région d’IDF. Pour cela, l’équipe de Droneez a décidée de déménager à Malakoff. </span></p>
                <p><span style="color: #000000;">Et un nouveau chapitre a commencer :&nbsp;3 mois de travaux continu dans le nouveau local pour créer le petit monde Droneeziens citué au 17 rue Hoche à Malakoff.&nbsp;&nbsp;</span></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h4><span style="color: #000000;">– DRONEEZ EN 2016 –</span></h4>
                <p><img class="alignnone wp-image-2610" title="- DRONEEZ EN 2016 -" src="assets/img/articles/Droneez _A chaque histoire un début_ - Le Blog de Droneez_files/d1.jpg" alt="" width="500" height="376"></p>
                <p>&nbsp;</p>
                <h4><span style="color: #000000;">– DRONEEZ EN 2018 –</span></h4>
                <p><img class="alignnone wp-image-2611" title="- DRONEEZ EN 2018 -" src="assets/img/articles/Droneez _A chaque histoire un début_ - Le Blog de Droneez_files/D2.jpg" alt="" width="500" height="376"></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p><span style="color: #000000;">N’oubliez pas de nous suivre sur nos réseaux sociaux</span> <a href="https://www.facebook.com/droneez/">Facebook</a> <a href="https://twitter.com/DRONEEZ_fr">Twitter</a> <a href="https://www.instagram.com/droneez_paris/">Instagram&nbsp;</a></p>
                <p><span style="color: #000000;">Et ne manquez pas de jeter un coup d’œil&nbsp;sur notre site <a href="https://www.droneez.com/">Droneez.com</a></span></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/02/09/" title="16 h 54 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-02-09T16:54:20+00:00">9 février 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-chaque-histoire-un-debut%2F&amp;t=Droneez+%22A+chaque+histoire+un+d%C3%A9but%22" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-chaque-histoire-un-debut%2F&amp;text=Droneez+%22A+chaque+histoire+un+d%C3%A9but%22" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-chaque-histoire-un-debut%2F&amp;title=Droneez%20%22A%20chaque%20histoire%20un%20d%C3%A9but%22&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Droneez%20%22A%20chaque%20histoire%20un%20d%C3%A9but%22%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-chaque-histoire-un-debut%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-chaque-histoire-un-debut%2F&amp;title=Droneez+%22A+chaque+histoire+un+d%C3%A9but%22" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "A chaque histoire un début ! Et le début de l'histoire de Droneez est : Matthieu et Sabri. Vous êtes curieux et vous voulez découvrir leur aventure, alors cliquez sur le lien en haut !"},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'Droneez &quot;A chaque histoire un début&quot; - Le Blog de Droneez'},
                    {property: 'og:description', content: "A chaque histoire un début ! Et le début de l'histoire de Droneez est : Matthieu et Sabri. Vous êtes curieux et vous voulez découvrir leur aventure, alors cliquez sur le lien en haut !"},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-droneez-a-chaque-histoire-un-debut/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'histoire droneez'},
                    {property: 'article:tag', content: 'pilotage drone'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-02-09T16:54:20+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:42+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:42+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/Posteasypeazy-2.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2017/10/Posteasypeazy-2.jpg'},
                    {property: 'og:image:width', content: '1080'},
                    {property: 'og:image:height', content: '565'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "A chaque histoire un début ! Et le début de l'histoire de Droneez est : Matthieu et Sabri. Vous êtes curieux et vous voulez découvrir leur aventure, alors cliquez sur le lien en haut !"},
                    {name: 'twitter:title', content: 'Droneez &quot;A chaque histoire un début&quot; - Le Blog de Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/Posteasypeazy-2.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-droneez-a-chaque-histoire-un-debut'
            },{
                id: 6,
                title: "DRONEEZ à la Médiathèque Nelson Mandela à Créteil ! - Le Blog Droneez",
                content:
           `<article id="post-2457" class="vertical-fancy-style post-2457 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-option-start-up category-35 category-36 description-off">
                <div class="post-thumbnail layzr-bg-transparent"><div class="fancy-date"><a title="16 h 11 min" href="https://www.droneez.com/2018/02/09/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">9</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/DRONEEZ à la Médiathèque Nelson Mandela à Créteil ! - Le Blog Droneez_files/FireShot-Capture-12-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" width="206" height="103" title="FireShot Capture 12 – Mon Compte I Wix.com_ – https___www.wix.com_my-account_sit" alt="" srcset="assets/img/articles/DRONEEZ à la Médiathèque Nelson Mandela à Créteil ! - Le Blog Droneez_files/FireShot-Capture-12-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" style="will-change: auto;"></div><div class="entry-content"><div></div>
                <div></div>
                <p><img class="aligncenter wp-image-2458 size-full" title="droneez à option start up créteil" src="assets/img/articles/DRONEEZ à la Médiathèque Nelson Mandela à Créteil ! - Le Blog Droneez_files/FireShot-Capture-12-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png" alt="" width="207" height="245"></p>
                <div style="text-align: left;"><span style="color: #000000;">DRONEEZ était à la Médiathèque Nelson Mandela à Créteil les 6 et 7 octobre 2016, pour l’événement annuel qui fait découvrir l’univers de l’innovation et des start-up aux jeunes élèves : <strong>OPTION START UP</strong>. Cet événement de la rentrée permet à plus de 10 000 jeunes de découvrir avec leurs enseignants des lieux d’innovation, des projets innovants de startups et des profils d’entrepreneurs.&nbsp;</span></div>
                <div style="text-align: left;"><span style="color: #000000;">Deux journées pendant lesquels DRONEEZ a fait une présentation de son activité et du monde des start-up à 4 classes de 3ème avec l’espoir d’avoir suscité la curiosité et la fibre entrepreneuriale de certain !<br>
                Pleines d’informations et de renseignements partagés avec les jeunes élevés ambitieux afin d’enrichir leurs curiosité et les initier au monde de l’entrepreneuriat.&nbsp;&nbsp;</span></div>
                <div></div>
                <div></div>
                <div>
                <p><span style="color: #000000;">N’oubliez pas de nous suivre sur nos réseaux sociaux</span> <a href="https://www.facebook.com/droneez/">Facebook</a> <a href="https://twitter.com/DRONEEZ_fr">Twitter</a> <a href="https://www.instagram.com/droneez_paris/">Instagram&nbsp;</a></p>
                <p><span style="color: #000000;">Et ne manquez pas de jeter un coup d’œil&nbsp;sur notre site <a href="https://www.droneez.com/">Droneez.com</a></span></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div>
                <div></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/02/09/" title="16 h 11 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-02-09T16:11:25+00:00">9 février 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-la-mediatheque-nelson-mandela-a-creteil%2F&amp;t=DRONEEZ+%C3%A0+la+M%C3%A9diath%C3%A8que+Nelson+Mandela+%C3%A0+Cr%C3%A9teil+%21" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-la-mediatheque-nelson-mandela-a-creteil%2F&amp;text=DRONEEZ+%C3%A0+la+M%C3%A9diath%C3%A8que+Nelson+Mandela+%C3%A0+Cr%C3%A9teil+%21" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-la-mediatheque-nelson-mandela-a-creteil%2F&amp;title=DRONEEZ%20%C3%A0%20la%20M%C3%A9diath%C3%A8que%20Nelson%20Mandela%20%C3%A0%20Cr%C3%A9teil%20%21&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=DRONEEZ%20%C3%A0%20la%20M%C3%A9diath%C3%A8que%20Nelson%20Mandela%20%C3%A0%20Cr%C3%A9teil%20%21%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-la-mediatheque-nelson-mandela-a-creteil%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-droneez-a-la-mediatheque-nelson-mandela-a-creteil%2F&amp;title=DRONEEZ+%C3%A0+la+M%C3%A9diath%C3%A8que+Nelson+Mandela+%C3%A0+Cr%C3%A9teil+%21" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'DRONEEZ à la Médiathèque Nelson Mandela à Créteil ! - Le Blog Droneez'},
                    {property: 'og:description', content: 'DRONEEZ était à la Médiathèque Nelson Mandela à Créteil les 6 et 7 octobre 2016, pour l’événement annuel qui fait découvrir l’univers de l’innovation et des start-up aux jeunes élèves : OPTION START UP. Cet événement de la rentrée permet à plus de 10 000 jeunes de découvrir avec leurs enseignants des lieux d’innovation, des…'},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-droneez-a-la-mediatheque-nelson-mandela-a-creteil/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'option start up'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-02-09T16:11:25+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:43+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:43+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/FireShot-Capture-12-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/02/FireShot-Capture-12-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png'},
                    {property: 'og:image:width', content: '207'},
                    {property: 'og:image:height', content: '245'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'DRONEEZ était à la Médiathèque Nelson Mandela à Créteil les 6 et 7 octobre 2016, pour l’événement annuel qui fait découvrir l’univers de l’innovation et des start-up aux jeunes élèves : OPTION START UP. Cet événement de la rentrée permet à plus de 10 000 jeunes de découvrir avec leurs enseignants des lieux d’innovation, des…'},
                    {name: 'twitter:title', content: 'DRONEEZ à la Médiathèque Nelson Mandela à Créteil ! - Le Blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/FireShot-Capture-12-Mon-Compte-I-Wix.com_-https___www.wix_.com_my-account_sit.png'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-droneez-a-la-mediatheque-nelson-mandela-a-creteil'
            },{
                id: 5,
                title: "Un pilote d'avion s'envole en drone - Le Blog de Droneez",
                content:
            `<article id="post-2452" class="vertical-fancy-style post-2452 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-drone-vol tag-droneez tag-pilotage tag-pilote-avion category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="15 h 57 min" href="https://www.droneez.com/2018/02/09/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">9</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Un pilote d&#39;avion s&#39;envole en drone - Le Blog de Droneez_files/droneez_concept_en_image_02.jpg" width="714" height="357" title="droneez_concept_en_image_02" alt="" srcset="assets/img/articles/Un pilote d&#39;avion s&#39;envole en drone - Le Blog de Droneez_files/droneez_concept_en_image_02.jpg" style="will-change: auto;"></div><div class="entry-content"><div><span style="color: #000000;">Fin octobre, Mathieu, pilote de ligne nous a fait l’honneur de venir tester notre concept. Nous en avons profité&nbsp;pour lui poser quelques questions, voici ses réponses :</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>1/ Quelle était votre opinion sur le drone avant votre cours de pilotage chez DRONEEZ ?</strong></span></div>
                <div><span style="color: #000000;">Mon opinion sur les drones avant mon cours de pilotage chez Droneez était assez vaste :&nbsp;un jouet pour petit et grand ou un outil pour professionnels avec une large gamme de taille, performance et utilité.</span></div>
                <div></div>
                <div><span style="color: #000000;"><strong>2/ Lors de votre première prise en main quels étaient vos ressentis&nbsp;?</strong></span><br>
                <span style="color: #000000;"> Au niveau maniabilité, en fonction du drone piloté plus ou moins maniable à vrai dire, et plus ou moins performant. Après quelques essais et un peu de patience pour bien assimiler&nbsp;les commandes et la philosophie, la prise en main se fait assez facilement. N’ayant jamais fait de drone et même de modèle réduit. Ne pas se trouver en première loge dans un poste de pilotage et voir le vol de l’extérieur est assez déroutant. Surtout quand on pilote le drone vers nous, mais fort sympathique.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>3/ Qu’avez vous pensé du format de cours d’une heure chez DRONEEZ&nbsp;?</strong></span></div>
                <div><span style="color: #000000;">Le format de cours est très intéressant, en progression par paliers en essayant chaque commande de vol, puis ensuite en essayant un parcours avec des portes et des virages, avant d’évoluer sur un drone un peu plus sophistiqué et performant, avec une toute autre maniabilité. Cela donne envie de progresser et on y prend goût.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>4/ Sur le vol à vue quelles ont été vos sensations ?</strong></span></div>
                <div><span style="color: #000000;">Au début, tant que j’étais dans l’axe de vol tout allait&nbsp;pour le mieux, ensuite pour le reste ce fut un peu plus compliqué. Et si on commence à réfléchir alors là&nbsp;… bonjour les dégâts. Puis quand on commence à prendre le drone en main on apprécie rapidement l’extraordinaire&nbsp;sensation de liberté.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>5/ Sur le vol en immersion (avec les lunettes de FPV) quelles ont été vos sensations ?</strong></span></div>
                <div><span style="color: #000000;">Malade … en étant sous le casque il est assez bizarre de voir une scène défiler devant ses yeux sans avoir la moindre sensation physique. Après un certain temps on s’habitue et on peut profiter du vol. On peut se prendre pour un insecte, passer sous les tables et naviguer dans une maison, chose plutôt rare en avion …</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>6/ Comment définiriez-vous le pilotage de drones en quelques mots ?</strong></span></div>
                <div><span style="color: #000000;">Redevenir un gamin un instant !</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>7/ Par rapport à votre métier de pilote d’avion quels sont les points communs et les différences ?</strong></span></div>
                <div><span style="color: #000000;">– Points communs : évolution dans un milieu en 3D, gestion de paramètres avec beaucoup d’anticipation, car l’environnement est en constante évolution.</span><br>
                <span style="color: #000000;"> – Différences : Sensations non physique, pas de notion de «&nbsp;pilotage aux fesses&nbsp;» comme dans un avion et la vue de l’extérieur change les perspectives d’action.</span></div>
                <div><span style="color: #000000;"><strong>8/ Auriez-vous un conseil à donner aux pilotes en herbe&nbsp;?</strong></span></div>
                <div><span style="color: #000000;">La persévérance et la patience seront vos alliées, et après beaucoup de travail, le résultat final n’en sera que meilleur. C’est du&nbsp;pur bonheur&nbsp;de voir s’achever autant d’efforts.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>9/ Pour conclure, qu’est-ce que vous retenez de cette session Droneez et du pilotage de drones ?</strong></span></div>
                <div><span style="color: #000000;">Un moment d’amusement ou je me suis vidé la tête. D’ailleurs, c’est quand la prochaine session ?! <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/Un pilote d&#39;avion s&#39;envole en drone - Le Blog de Droneez_files/1f609.svg"></span></div>
                <div></div>
                <div></div>
                <div>
                <p><span style="color: #000000;">N’oubliez pas de nous suivre sur nos réseaux sociaux</span> <a href="https://www.facebook.com/droneez/">Facebook</a> <a href="https://twitter.com/DRONEEZ_fr">Twitter</a> <a href="https://www.instagram.com/droneez_paris/">Instagram&nbsp;</a></p>
                <p><span style="color: #000000;">Et ne manquez pas de jeter un coup d’œil&nbsp;sur notre site <a href="https://www.droneez.com/">Droneez.com</a></span></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/02/09/" title="15 h 57 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-02-09T15:57:32+00:00">9 février 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-un-pilote-davion-senvole-en-drone%2F&amp;t=Un+pilote+d%27avion+s%27envole+en+drone" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-un-pilote-davion-senvole-en-drone%2F&amp;text=Un+pilote+d%27avion+s%27envole+en+drone" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-un-pilote-davion-senvole-en-drone%2F&amp;title=Un%20pilote%20d%27avion%20s%27envole%20en%20drone&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Un%20pilote%20d%27avion%20s%27envole%20en%20drone%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-un-pilote-davion-senvole-en-drone%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-un-pilote-davion-senvole-en-drone%2F&amp;title=Un+pilote+d%27avion+s%27envole+en+drone" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "Interview avec Mathieu, le jeune pilote de Ryanair qui nous a fait l'honneur de venir tester notre concept. Curieux de connaitre son feedback ? Alors lisez l'article."},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: "Un pilote d'avion s'envole en drone - Le Blog de Droneez"},
                    {property: 'og:description', content: "Interview avec Mathieu, le jeune pilote de Ryanair qui nous a fait l'honneur de venir tester notre concept. Curieux de connaitre son feedback ? Alors lisez l'article."},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-un-pilote-davion-senvole-en-drone/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'drone vol'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'pilotage'},
                    {property: 'article:tag', content: 'pilote avion'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-02-09T15:57:32+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:43+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:43+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/droneez_concept_en_image_02.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/02/droneez_concept_en_image_02.jpg'},
                    {property: 'og:image:width', content: '715'},
                    {property: 'og:image:height', content: '720'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "Interview avec Mathieu, le jeune pilote de Ryanair qui nous a fait l'honneur de venir tester notre concept. Curieux de connaitre son feedback ? Alors lisez l'article."},
                    {name: 'twitter:title', content: "Un pilote d'avion s'envole en drone - Le Blog de Droneez"},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/droneez_concept_en_image_02.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-un-pilote-davion-senvole-en-drone'
            },{
                id: 4,
                title: "Un motard s'éclate à Droneez ! - Le Blog Droneez",
                content:
           `<article id="post-2438" class="vertical-fancy-style post-2438 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-pilotage category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="14 h 41 min" href="https://www.droneez.com/2018/02/09/" rel="nofollow"><span class="entry-month">Fév</span><span class="entry-date updated">9</span><span class="entry-year">2018</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Un motard s&#39;éclate à Droneez ! - Le Blog Droneez_files/droneez-decouverte.jpg" width="374" height="187" title="droneez-decouverte" alt="droneez decouverte" srcset="assets/img/articles/Un motard s&#39;éclate à Droneez ! - Le Blog Droneez_files/droneez-decouverte.jpg" style="will-change: auto;"></div><div class="entry-content"><div><img class="alignnone wp-image-2443 size-full" title="Droneez motard seb" src="assets/img/articles/Un motard s&#39;éclate à Droneez ! - Le Blog Droneez_files/Captureii.png" alt="" width="133" height="160"></div>
                <div></div>
                <div><span style="color: #000000;">Fin Novembre, nous avons reçu Seb, un motard confirmé venu suivre une&nbsp;initiation au pilotage de drones,&nbsp;nous en avons profité pour lui poser&nbsp;quelques questions <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/Un motard s&#39;éclate à Droneez ! - Le Blog Droneez_files/1f609.svg"></span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>1/ Quelle était votre opinion sur le drone avant votre cours de pilotage chez DRONEEZ ?&nbsp;</strong></span><br>
                <span style="color: #000000;"> Je pensais que la maîtrise du drone (stabilisation) serait beaucoup plus facile. La nervosité des drones testés était assez délicate à appréhender.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>2/ Lors de vos premières minutes de vols quels étaient vos sentiments ?</strong></span><br>
                <span style="color: #000000;"> Le drone est ultra maniable mais vraiment trop « nerveux » pour réussir à vraiment le maîtriser en une heure.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>3/ Qu’avez-vous pensé du format de cours (1h) de DRONEEZ en 3 étapes (premières instructions sur drone lent / deuxième sur drones 6 rotors / troisième en vol en immersion) ?</strong></span><br>
                <span style="color: #000000;"> Très bien!</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>4/ Sur le vol à vue quelles ont été vos sensations en fin de cours ?</strong></span><br>
                <span style="color: #000000;"> Nécessiterait un second cours pour continuer à&nbsp;s’entrainer ! Au bout d’une heure on maîtrise&nbsp;mieux le drone, c’est frustrant de s’arrêter là <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/Un motard s&#39;éclate à Droneez ! - Le Blog Droneez_files/1f609.svg"></span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>5/ Sur le vol en immersion (casque) quelles ont été vos sensations ?</strong></span><br>
                <span style="color: #000000;"> Légère perte d’équilibre par moment mais sensation de liberté totale !</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>6/ Comment définiriez-vous le pilotage de drones en quelques mots ?</strong></span></div>
                <div><span style="color: #000000;">Ludique, compliqué (au début en tout cas).&nbsp;Plus on maîtrise le drone et plus on s’amuse,&nbsp;du coup on apprécie plus la fin du cours que le début.</span></div>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>7/ Par rapport à la moto quels sont selon vous les points communs et les différences ?</strong></span></div>
                <div><span style="color: #000000;">Point commun&nbsp;: seul un faible pourcentage de la population est capable de piloter une moto.En raison de la difficulté à corréler les mouvements des pieds et des mains pour passer une vitesse, freiner, etc.</span></div>
                <p><span style="color: #000000;">Avec le drone c’est pareil. Il faut bien comprendre le dosage des commandes et avoir une vision à 360° de leur utilité dans le cas d’un trajet ou le drone est inversé par rapport à l’utilisateur par exemple.</span></p>
                <p><span style="color: #000000;">Différence&nbsp;: une moto ça ne vole pas &nbsp;^^</span></p>
                <div><span style="color: #000000;">&nbsp;</span></div>
                <div><span style="color: #000000;"><strong>8/ Pour conclure, qu’est-ce que vous retenez de cette session Droneez et du pilotage de drones ?</strong></span></div>
                <div><span style="color: #000000;">Très bonne expérience qui nécessiterait un second cours pour ma part.</span></div>
                <p><span style="color: #000000;">J’ai bien saisi qu’un drone n’était pas un jouet (comme le laissent penser les vendeurs Fnac et autres) et que c’est un objet fragile,</span></p>
                <p><span style="color: #000000;">Avec les restrictions d’usage il est nettement plus avantageux de dépenser 15€ avec Droneez afin de s’amuser dans un environnement adapté et encadré par des pros&nbsp;<img draggable="false" class="emoji" alt="☺" src="assets/img/articles/Un motard s&#39;éclate à Droneez ! - Le Blog Droneez_files/263a.svg"></span></p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à <a style="color: #000000;">liker</a> notre&nbsp;page&nbsp;Facebook&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a> !<br>
                </span></p>
                <p style="text-align: center;"><span style="color: #000000;">Et ne manquez pas de jeter un coup d’œil&nbsp;sur notre site <a href="https://www.droneez.com/">Droneez.com</a></span><span style="color: #000000;">&nbsp;</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !!!</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2018/02/09/" title="14 h 41 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2018-02-09T14:41:22+00:00">9 février 2018</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-un-motard-seclate-a-droneez%2F&amp;t=Un+motard+s%27%C3%A9clate+%C3%A0+Droneez+%21" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-un-motard-seclate-a-droneez%2F&amp;text=Un+motard+s%27%C3%A9clate+%C3%A0+Droneez+%21" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-un-motard-seclate-a-droneez%2F&amp;title=Un%20motard%20s%27%C3%A9clate%20%C3%A0%20Droneez%20%21&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Un%20motard%20s%27%C3%A9clate%20%C3%A0%20Droneez%20%21%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-un-motard-seclate-a-droneez%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-un-motard-seclate-a-droneez%2F&amp;title=Un+motard+s%27%C3%A9clate+%C3%A0+Droneez+%21" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: 'Fin Novembre, nous avons reçu Seb, un motard confirmé venu suivre une&nbsp;initiation au pilotage de drones,&nbsp;nous en avons profité pour lui poser&nbsp;quelques questions. checker notre article pour en savoir plus.'},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: "Un motard s'éclate à Droneez ! - Le Blog Droneez"},
                    {property: 'og:description', content: 'Fin Novembre, nous avons reçu Seb, un motard confirmé venu suivre une&nbsp;initiation au pilotage de drones,&nbsp;nous en avons profité pour lui poser&nbsp;quelques questions. checker notre article pour en savoir plus.'},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-un-motard-seclate-a-droneez/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'pilotage'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2018-02-09T14:41:22+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:44+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:44+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/03/droneez-decouverte.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/03/droneez-decouverte.jpg'},
                    {property: 'og:image:width', content: '375'},
                    {property: 'og:image:height', content: '209'},
                    {property: 'og:image:alt', content: 'droneez decouverte'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'Fin Novembre, nous avons reçu Seb, un motard confirmé venu suivre une&nbsp;initiation au pilotage de drones,&nbsp;nous en avons profité pour lui poser&nbsp;quelques questions. checker notre article pour en savoir plus.'},
                    {name: 'twitter:title', content: "Un motard s'éclate à Droneez ! - Le Blog Droneez"},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/03/droneez-decouverte.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-un-motard-seclate-a-droneez'
            },{
                id: 3,
                title:"La réglementation des drones : Piloter en toute sécurité - Le Blog Droneez",
                content:
            `<article id="post-1677" class="vertical-fancy-style post-1677 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-piloter-en-toute-securite tag-reglementation-drone category-35 category-36 description-off">
                <div class="post-thumbnail layzr-bg-transparent"><div class="fancy-date"><a title="17 h 22 min" href="https://www.droneez.com/2017/10/16/" rel="nofollow"><span class="entry-month">Oct</span><span class="entry-date updated">16</span><span class="entry-year">2017</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/La réglementation des drones _ Piloter en toute sécurité - Le Blog Droneez_files/92f383_529d33635f3a4db5be1dafe3c9702777mv2-1260x630.png" width="1260" height="630" title="92f383_529d33635f3a4db5be1dafe3c9702777~mv2" alt="" srcset="assets/img/articles/La réglementation des drones _ Piloter en toute sécurité - Le Blog Droneez_files/92f383_529d33635f3a4db5be1dafe3c9702777mv2-1260x630.png" style="will-change: auto;"></div><div class="entry-content"><p><span style="color: #000000;">Beaucoup d’entre vous nous demande bien souvent où et quand il est possible de faire voler son drone tout en respectant la loi. Voici une petite mise au point sur ce qu’il faut/faut pas faire&nbsp;!</span></p>
                <h2><span style="color: #000000;"><strong>CE QU’IL FAUT :</strong></span></h2>
                <ul>
                <li><span style="color: #000000;">Gardez à tout moment un contact visuel direct avec votre drone.</span></li>
                <li><span style="color: #000000;">Respectez la hauteur maximale autorisée&nbsp;: 150m d’altitude.</span></li>
                <li><span style="color: #000000;">Uniquement la journée et par temps clair.</span></li>
                <li><span style="color: #000000;">Demandez toujours l’autorisation de pouvoir prendre des photos/filmer durant&nbsp;le vol. (le respect de la vie privée des autres)</span></li>
                <li><span style="color: #000000;">Respectez une distance de sécurité vis-à-vis des personnes et des biens.</span></li>
                <li><span style="color: #000000;">S’informez sur les assurances existantes en cas de dommages causés par votre drone.</span></li>
                </ul>
                <h2><span style="color: #000000;"><strong>Ce QU’IL NE FAUT PAS :</strong></span></h2>
                <ul>
                <li><span style="color: #000000;">Bien sur, ne survolez pas des personnes et gardez une distance minimale de sécurité, les hélices des drones sont dangereuses et elles peuvent blesser.</span></li>
                <li><span style="color: #000000;">Ne pilotez pas votre drone à proximité d’aéroports ou d’aérodromes…</span></li>
                <li><span style="color: #000000;">De même, ne survolez pas au dessus ou près des zones risques ou protégés telles que des complexes industriels, des installations nucléaires, des prisons…</span></li>
                <li><span style="color: #000000;">Le cumul des risques étant trop important, en ville on ne peut pas faire voler votre drone.</span></li>
                <li><span style="color: #000000;">Ne diffusez pas vos prises de vues sans l’accord des personnes qui apparaissent dessus.</span></li>
                <li><span style="color: #000000;">Autour de toutes les lieux de transit &amp; de voyages ne faites pas volez votre drone (voies de chemins de fer, des voies navigables et des autoroutes).</span></li>
                </ul>
                <p><span style="color: #000000;">En cas de doute renseignez-vous sur le site du ministère de l’écologie et du développement durable.</span></p>
                <h2>LES ZONES DE VOL :</h2>
                <p><span style="color: #000000;">En ce qui concerne l’Île-de-France, voici en rouge les zone où le vol est interdit&nbsp;:</span></p>
                <p><span style="color: #000000;"><em><img class="alignnone wp-image-2329 size-large" title="Droneez-les zones où il est interdit de faire voler un drone " src="assets/img/articles/La réglementation des drones _ Piloter en toute sécurité - Le Blog Droneez_files/FireShot-Capture-8-Restrictions-pour-drones-de-loisir-G_-https___www.geoportail.gouv_.fr_donn-1024x478.png" alt="" width="1024" height="478" srcset="assets/img/articles/La réglementation des drones _ Piloter en toute sécurité - Le Blog Droneez_files/FireShot-Capture-8-Restrictions-pour-drones-de-loisir-G_-https___www.geoportail.gouv_.fr_donn-1024x478.png" sizes="(max-width: 380px) 37.109375vw,(max-width: 500px) 48.828125vw,(max-width: 660px) 64.453125vw,(max-width: 800px) 78.125vw,1024px"></em></span></p>
                <p><span style="color: #000000;">Et oui, vous ne rêvez pas&nbsp;! Il est interdit dans un rayon de 10 km autour de Paris de faire voler en plein air un drone.</span></p>
                <p><span style="color: #000000;">Vous vous demandez alors : Qu’en est-il des professionnels ?</span></p>
                <p><span style="color: #000000;">Les personnes disposant d’un brevet de télépilote (licence&nbsp;délivrée par la DGAC)&nbsp;peuvent demander des autorisations de décollage auprès de la préfecture. Cependant, il n’est pas garanti que les zones de vols normalement interdites leurs soient ouvertes.</span></p>
                <p>&nbsp;</p>
                <h2>L’INTERNATIONAL :</h2>
                <p><span style="color: #000000;">Sachez aussi que tous les pays disposent d’une réglementation différente concernant les drones. Il est donc important de se renseigner sur les règles des pays que l’on visite avant de faire voler son drone afin d’éviter toutes mauvaises surprises.<a style="color: #000000;" href="http://dronerules.eu/fr/"><br>
                Ici ce trouve la liste des réglementations pour tous nos voisin européens.</a></span></p>
                <p><span style="color: #000000;">Et pour éviter toutes ces prises de tête n’oubliez pas que le vol d’intérieur n’est soumis à aucune restriction.</span></p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à <a style="color: #000000;">liker</a> notre&nbsp;page&nbsp;Facebook&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a> !<br>
                </span></p>
                <p style="text-align: center;"><span style="color: #000000;">Et ne manquez pas de jeter un coup d’œil&nbsp;sur notre site <a href="https://www.droneez.com/">Droneez.com</a></span><span style="color: #000000;">&nbsp;</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !!!</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2017/10/16/" title="17 h 22 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2017-10-16T17:22:30+00:00">16 octobre 2017</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fblog-la-reglementation-des-drones-piloter-en-toute-securite%2F&amp;t=La+r%C3%A9glementation+des+drones+%3A+Piloter+en+toute+s%C3%A9curit%C3%A9+-+Le+Blog+Droneez" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-la-reglementation-des-drones-piloter-en-toute-securite%2F&amp;text=La+r%C3%A9glementation+des+drones+%3A+Piloter+en+toute+s%C3%A9curit%C3%A9+-+Le+Blog+Droneez" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fblog-la-reglementation-des-drones-piloter-en-toute-securite%2F&amp;title=La%20r%C3%A9glementation%20des%20drones%20%3A%20Piloter%20en%20toute%20s%C3%A9curit%C3%A9%20-%20Le%20Blog%20Droneez&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=La%20r%C3%A9glementation%20des%20drones%20%3A%20Piloter%20en%20toute%20s%C3%A9curit%C3%A9%20-%20Le%20Blog%20Droneez%20-%20https%3A%2F%2Fwww.droneez.com%2Fblog-la-reglementation-des-drones-piloter-en-toute-securite%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fblog-la-reglementation-des-drones-piloter-en-toute-securite%2F&amp;title=La+r%C3%A9glementation+des+drones+%3A+Piloter+en+toute+s%C3%A9curit%C3%A9+-+Le+Blog+Droneez" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: 'Beaucoup d’entre vous nous demande bien souvent où et quand il est possible de faire voler son drone tout en respectant la loi. Voici une petite mise au point sur ce qu’il faut/faut pas faire&nbsp;!'},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'La réglementation des drones : Piloter en toute sécurité - Le Blog Droneez'},
                    {property: 'og:description', content: 'Beaucoup d’entre vous nous demande bien souvent où et quand il est possible de faire voler son drone tout en respectant la loi. Voici une petite mise au point sur ce qu’il faut/faut pas faire&nbsp;!'},
                    {property: 'og:url', content: 'https://www.droneez.com/blog-la-reglementation-des-drones-piloter-en-toute-securite/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'piloter en toute sécurité'},
                    {property: 'article:tag', content: 'réglementation drone'},
                    {property: 'article:section', content: 'home'},
                    {property: 'article:published_time', content: '2017-10-16T17:22:30+02:00'},
                    {property: 'article:modified_time', content: '2018-08-29T11:59:06+02:00'},
                    {property: 'og:updated_time', content: '2018-08-29T11:59:06+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/92f383_529d33635f3a4db5be1dafe3c9702777mv2.png'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2017/10/92f383_529d33635f3a4db5be1dafe3c9702777mv2.png'},
                    {property: 'og:image:width', content: '1260'},
                    {property: 'og:image:height', content: '655'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'Beaucoup d’entre vous nous demande bien souvent où et quand il est possible de faire voler son drone tout en respectant la loi. Voici une petite mise au point sur ce qu’il faut/faut pas faire&nbsp;!'},
                    {name: 'twitter:title', content: 'La réglementation des drones : Piloter en toute sécurité - Le Blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/92f383_529d33635f3a4db5be1dafe3c9702777mv2.png'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Droneez'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'blog-la-reglementation-des-drones-piloter-en-toute-securite'
            },{
                id: 2,
                title: "Droneez et ses bébés drones à VIVATECH - Le Blog Droneez",
                content:
            `<article id="post-1676" class="vertical-fancy-style post-1676 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-drone-a-vivatech tag-droneez tag-pilotage-drone category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="17 h 20 min" href="https://www.droneez.com/2017/10/16/" rel="nofollow"><span class="entry-month">Oct</span><span class="entry-date updated">16</span><span class="entry-year">2017</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Droneez et ses bébés drones à VIVATECH - Le Blog Droneez_files/IMG_0706.jpg" width="3264" height="1632" title="IMG_0706" alt="" srcset="assets/img/articles/Droneez et ses bébés drones à VIVATECH - Le Blog Droneez_files/IMG_0706.jpg" style="will-change: auto;"></div><div class="entry-content"><h1 style="text-align: center;"><span style="color: #000000;">LES DRONES S’ENVOLE PAR TOUT&nbsp;</span><span style="color: #000000;">À&nbsp;</span></h1>
                <h1 style="text-align: center;"><span style="color: #000000;">VIVATECH&nbsp;</span></h1>
                <p>&nbsp;</p>
                <p><img class="wp-image-2725 aligncenter" src="assets/img/articles/Droneez et ses bébés drones à VIVATECH - Le Blog Droneez_files/IMG_0712.jpg" alt="" width="600" height="450"></p>
                <p>&nbsp;</p>
                <p class="font_8"><span style="color: #000000;">Vivatech est la combinaison Tech et Start-Up par excellence. C’est le salon de l’innovation française qui réunit la crème de technologie, qui a su se rendre incontournable et attirer des foules de professionnels et de particuliers&nbsp;!</span></p>
                <p class="font_8"><span style="color: #000000;">Alors pour un salon de cette envergure quoi de mieux qu’une animation drone pour sublimer la venue du grand public ?!</span></p>
                <p class="font_8"><span style="color: #000000;">En partenariat avec Parrot, sur le stand du PMU, L’équipe Droneez a animée un atelier «&nbsp;initiation au pilotage de drone&nbsp;» toute la journée du samedi avec plus de 200 personnes. Aux moments de forte&nbsp;affluence&nbsp;certains ont même fait plus d’une&nbsp;</span><span style="color: #000000;">heure de queue pour venir essayer l’atelier et profiter de notre présence pour nourrir leurs curiosité en répondant à toutes les questions posées.&nbsp;</span></p>
                <h3><span style="color: #000000;">UNE JOURNÉE INOUBLIABLE AU CŒUR DE L’INNOVATION FRANÇAISE&nbsp;&nbsp;</span></h3>
                <p><span style="color: #000000;">L’équipe Droneez a passé un excellent samedi à VIVATECH. Entouré d’une foule de fans des drones et d’autres qui sont laissés guider par leurs curiosité et envie de connaitre ce mythe de tech. Et avec notre partenaire Parrot, on a profiter du salon pour sortir le nouveau né de la génération bebop qui était le super star de la journée. Tout le monde voulait le tester !<br>
                Pour augmenter le degré de l’ambiance et de challenge, on a organiser des défis à deux. Le meilleur gagne une carte d’invitation chez nous pour une heure de pilotage offerte. Comme encouragement et remerciement pour ça participation.&nbsp;</span></p>
                <p>&nbsp;</p>
                <p><span style="color: #000000;"><img class="wp-image-2726 aligncenter" src="assets/img/articles/Droneez et ses bébés drones à VIVATECH - Le Blog Droneez_files/IMG_0695.jpg" alt="" width="600" height="450"><br>
                </span></p>
                <p class="font_8"><span style="color: #000000;">Malgré un rythme effréné, nous avons pleinement profité de cette journée. Et apprécié tous les sourires des gens qui quittaient (à contre-cœur) le stand du PMU. Et u</span><span style="color: #000000;">ne chose est sûre nous allons tous faire pour que Vivatech nous accueil de nouveau ! à refaire avec un grand plaisir !&nbsp;</span></p>
                <p class="font_8"><span style="color: #000000;"><br>
                A l’année prochaine.&nbsp;</span></p>
                <p>&nbsp;</p>
                <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons à&nbsp;liker&nbsp;notre&nbsp;<a style="color: #000000;">page</a><a href="https://www.facebook.com/droneez/">&nbsp;Facebook</a>&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;" href="https://www.droneez.com/newsletter/">newsletter</a>&nbsp;!</span></p>
                <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité !!!</span></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2017/10/16/" title="17 h 20 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2017-10-16T17:20:09+00:00">16 octobre 2017</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdroneez-et-ses-bebes-drones-a-vivatech%2F&amp;t=Droneez+et+ses+b%C3%A9b%C3%A9s+drones+%C3%A0+VIVATECH" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-et-ses-bebes-drones-a-vivatech%2F&amp;text=Droneez+et+ses+b%C3%A9b%C3%A9s+drones+%C3%A0+VIVATECH" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-et-ses-bebes-drones-a-vivatech%2F&amp;title=Droneez%20et%20ses%20b%C3%A9b%C3%A9s%20drones%20%C3%A0%20VIVATECH&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Droneez%20et%20ses%20b%C3%A9b%C3%A9s%20drones%20%C3%A0%20VIVATECH%20-%20https%3A%2F%2Fwww.droneez.com%2Fdroneez-et-ses-bebes-drones-a-vivatech%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-et-ses-bebes-drones-a-vivatech%2F&amp;title=Droneez+et+ses+b%C3%A9b%C3%A9s+drones+%C3%A0+VIVATECH" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: 'Vivatech, le rendez-vous Tech et Start-Up. Le salon qui a su se rendre incontournable et attirer des foules de professionnels et de particuliers&nbsp;!'},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: 'Droneez et ses bébés drones à VIVATECH - Le Blog Droneez'},
                    {property: 'og:description', content: 'Vivatech, le rendez-vous Tech et Start-Up. Le salon qui a su se rendre incontournable et attirer des foules de professionnels et de particuliers&nbsp;!'},
                    {property: 'og:url', content: 'https://www.droneez.com/droneez-et-ses-bebes-drones-a-vivatech/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'drone à vivatech'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'pilotage drone'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2017-10-16T17:20:09+02:00'},
                    {property: 'article:modified_time', content: '2018-05-15T10:22:45+02:00'},
                    {property: 'og:updated_time', content: '2018-05-15T10:22:45+02:00'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: 'Vivatech, le rendez-vous Tech et Start-Up. Le salon qui a su se rendre incontournable et attirer des foules de professionnels et de particuliers&nbsp;!'},
                    {name: 'twitter:title', content: 'Droneez et ses bébés drones à VIVATECH - Le Blog Droneez'},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/IMG_0706.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Droneez'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: "droneez-et-ses-bebes-drones-a-vivatech"
            },{
                id: 1,
                title: "DRONEEZ à l'Urban Soccer d'Ivry - Le Blog Droneez",
                content:
            `<article id="post-1615" class="vertical-fancy-style post-1615 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-pilotage-drone tag-urban-soccer-drone category-35 category-36 description-off">
                <div class="post-thumbnail"><div class="fancy-date"><a title="11 h 28 min" href="https://www.droneez.com/2017/10/13/" rel="nofollow"><span class="entry-month">Oct</span><span class="entry-date updated">13</span><span class="entry-year">2017</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/DRONEEZ à l&#39;Urban Soccer d&#39;Ivry - Le Blog Droneez_files/IMG_2868-1.jpg" width="1280" height="640" title="IMG_2868 (1)" alt="" srcset="assets/img/articles/DRONEEZ à l&#39;Urban Soccer d&#39;Ivry - Le Blog Droneez_files/IMG_2868-1.jpg" style="will-change: auto;"></div><div class="entry-content"><h1 style="text-align: center;"><span style="color: #000000;"><strong>DRONEEZ S’ENVOLE À L’URBAN SOCCER&nbsp;</strong></span></h1>
                <p style="text-align: left;"><span style="color: #000000;">Vous avez toujours voulu piloter un drone? il est désormais possible, droneez vous accueille tout les samedis de 15h à 16h à l’Urban Soccer d’Ivry proche de Paris&nbsp;pour des initiations aux drones !&nbsp;</span></p>
                <p><span style="color: #000000;">Plusieurs ateliers proposées ainsi que des défis en groupe et des surprises pour assurer l’ambiance et être à la hauteur de vos attentes. Chaque samedi et pendant 2h, on partage avec vous notre savoir et notre «&nbsp;savoir-piloter&nbsp;» en s’envolant dans l’univers des drones de loisirs et de nouvelles tech. Cette occasion est la meilleur pour connaitre Droneez en général et spécialement le pilotage des&nbsp; drones. Et pour transmettre tout ça et de bien profiter, l’Urban Soccer à Ivry est le meilleur endroit avec plus de 200 visiteurs chaque samedi qui viennent pour tester et découvrir le mythe des drones et cette technologie mystère.</span></p>
                <p><span style="color: #000000;">Alors vous aussi, venez s’envoler en air en mode drone ! une opportunité à ne pas rater <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/DRONEEZ à l&#39;Urban Soccer d&#39;Ivry - Le Blog Droneez_files/1f609.svg"></span></p>
                <p>Réservez votre session ici: <a href="https://www.droneez.com/">droneez.com</a></p>
                <p><img class="aligncenter wp-image-2402 size-full" src="assets/img/articles/DRONEEZ à l&#39;Urban Soccer d&#39;Ivry - Le Blog Droneez_files/Capture.png" alt="" width="627" height="239" srcset="assets/img/articles/DRONEEZ à l&#39;Urban Soccer d&#39;Ivry - Le Blog Droneez_files/1f609.svg"></span></p>
                <p>Réservez votre session ici: <a href="https://www.droneez.com/">droneez.com</a></p>
                <p><img class=" sizes="(max-width: 380px) 60.606060606061vw,(max-width: 500px) 79.744816586922vw,(max-width: 660px) 105.26315789474vw,(max-width: 800px) 127.59170653907vw,627px"></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p><span style="color: #000000;">N’oubliez pas de nous suivre sur nos réseaux sociaux</span> <a href="https://www.facebook.com/droneez/">Facebook</a> <a href="https://twitter.com/DRONEEZ_fr">Twitter</a> <a href="https://www.instagram.com/droneez_paris/">Instagram&nbsp;</a></p>
                <p>&nbsp;</p>
                <div style="text-align: center;"><strong><span style="color: #000000;">Que le drone soit avec vous!</span></strong></div>
                <div style="text-align: center;"><strong><span style="color: #000000;">L’équipe DRONEEZ</span></strong></div>
                </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2017/10/13/" title="11 h 28 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2017-10-13T11:28:37+00:00">13 octobre 2017</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdroneez-a-lurban-soccer-divry%2F&amp;t=DRONEEZ+%C3%A0+l%27Urban+Soccer+d%27Ivry" title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-a-lurban-soccer-divry%2F&amp;text=DRONEEZ+%C3%A0+l%27Urban+Soccer+d%27Ivry" title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-a-lurban-soccer-divry%2F&amp;title=DRONEEZ%20%C3%A0%20l%27Urban%20Soccer%20d%27Ivry&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=DRONEEZ%20%C3%A0%20l%27Urban%20Soccer%20d%27Ivry%20-%20https%3A%2F%2Fwww.droneez.com%2Fdroneez-a-lurban-soccer-divry%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-a-lurban-soccer-divry%2F&amp;title=DRONEEZ+%C3%A0+l%27Urban+Soccer+d%27Ivry" title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                </article>`,
                meta: [
                    {name: 'description', content: "Tu as toujours voulu piloter un drone? alors rejoins droneez à l'Urban Soccer d'Ivry proche de Paris&nbsp;pour des initiations aux drones, tout les samedis de 15h à 16h."},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: "DRONEEZ à l'Urban Soccer d'Ivry - Le Blog Droneez"},
                    {property: 'og:description', content: "Tu as toujours voulu piloter un drone? alors rejoins droneez à l'Urban Soccer d'Ivry proche de Paris&nbsp;pour des initiations aux drones, tout les samedis de 15h à 16h."},
                    {property: 'og:url', content: 'https://www.droneez.com/droneez-a-lurban-soccer-divry/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'pilotage drone'},
                    {property: 'article:tag', content: 'urban soccer drone'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2017-10-13T11:28:37+02:00'},
                    {property: 'article:modified_time', content: '2018-04-23T16:48:51+02:00'},
                    {property: 'og:updated_time', content: '2018-04-23T16:48:51+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/IMG_2868-1.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2017/10/IMG_2868-1.jpg'},
                    {property: 'og:image:width', content: '1280'},
                    {property: 'og:image:height', content: '722'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "Tu as toujours voulu piloter un drone? alors rejoins droneez à l'Urban Soccer d'Ivry proche de Paris&nbsp;pour des initiations aux drones, tout les samedis de 15h à 16h."},
                    {name: 'twitter:title', content: "DRONEEZ à l'Urban Soccer d'Ivry - Le Blog Droneez"},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2017/10/IMG_2868-1.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Droneez'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'droneez-a-lurban-soccer-divry'
            },{
                id: 0,
                title: "Droneez décroche la bourse French tech ! Fier d'être Droneez - Le Blog Droneez",
                content:
                    `<article id="post-2435" class="vertical-fancy-style post-2435 post type-post status-publish format-standard has-post-thumbnail category-evenements category-home tag-droneez tag-french-tech tag-pilotage tag-vol-drone category-35 category-36 description-off">
                    <div class="post-thumbnail"><div class="fancy-date"><a title="11 h 58 min" href="https://www.droneez.com/2017/04/09/" rel="nofollow"><span class="entry-month">Avr</span><span class="entry-date updated">9</span><span class="entry-year">2017</span></a></div><img class="lazy-load preload-me is-loaded" src="assets/img/articles/Droneez décroche la bourse French tech ! Fier d&#39;être Droneez - Le Blog Droneez_files/Sans-titre-4.jpg" width="288" height="144" title="Sans titre-4" alt=""  style="will-change: auto;"></div><div class="entry-content"><h3 style="text-align: left;"><span style="color: #000000;"><span style="color: #000000;"><br>
                    Bourse French Tech en poche !<br>
                    </span></span></h3>
                    <p style="text-align: center;"><span style="color: #000000;"><span style="color: #000000;"><br>
                    DRONEEZ vient de décrocher la&nbsp;bourse French Tech, décernée par la BPI (Banque pour l’Investissement). Cette subvention est le symbole de reconnaissance du caractère innovant de notre activité !<br>
                    Cette bourse est un push fort pour l’équipe. C’est une motivation et une preuve que notre activité représente l’avenir de l’univers du drone et du pilotage surtout. L’initiative French Tech encourage les strat-up françaises en France ou à l’étranger à innover et revaloriser l’image de la France et des start-up.</span></span></p>
                    <p style="text-align: center;"><span style="color: #000000;">Votre satisfaction est garantie avec l’équipe Droneez <img draggable="false" class="emoji" alt="😉" src="assets/img/articles/Droneez décroche la bourse French tech ! Fier d&#39;être Droneez - Le Blog Droneez_files/1f609.svg">&nbsp;</span></p>
                    <div style="text-align: center;"></div>
                    <div></div>
                    <div></div>
                    <div style="text-align: left;"><span style="color: #000000;"><span style="color: #000000;"><img class="wp-image-2817 aligncenter" src="assets/img/articles/Droneez décroche la bourse French tech ! Fier d&#39;être Droneez - Le Blog Droneez_files/le-groupe-la-poste-soutient-french-tech-fest.jpg" alt="" width="500" height="332"><br>
                    </span></span></div>
                    <div></div>
                    <p>&nbsp;</p>
                    <div style="text-align: center;"><span style="color: #000000;">&nbsp;</span></div>
                    <div style="text-align: center;"><span style="color: #000000;">&nbsp;</span></div>
                    <p style="text-align: center;"><span style="color: #000000;">Afin de toujours connaître l’actu DRONEEZ&nbsp;nous vous invitons&nbsp; à&nbsp;liker&nbsp;notre&nbsp;<a style="color: #000000;">page</a>&nbsp;Facebook&nbsp;et à vous inscrire à notre&nbsp;<a style="color: #000000;">newsletter</a>&nbsp;!</span></p>
                    <p style="text-align: center;"><span style="color: #000000;">Mille mercis pour votre fidélité&nbsp;</span></p>
                    </div><div class="post-meta wf-mobile-collapsed"><div class="entry-meta"><a href="https://www.droneez.com/2017/04/09/" title="11 h 58 min" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2017-04-09T11:58:14+00:00">9 avril 2017</time></a></div></div><div class="single-share-box"><div class="share-link-description">Partager cet article</div><div class="share-buttons"><a class="facebook" href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.droneez.com%2Fdroneez-decroche-la-bourse-french-tech-fier-d-etre-droneez%2F&amp;t=Droneez+d%C3%A9croche+la+bourse+French+tech+%21+Fier+d%27%C3%AAtre+Droneez." title="Facebook" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Facebook</span></a><a class="twitter" href="https://twitter.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-decroche-la-bourse-french-tech-fier-d-etre-droneez%2F&amp;text=Droneez+d%C3%A9croche+la+bourse+French+tech+%21+Fier+d%27%C3%AAtre+Droneez." title="Twitter" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Twitter</span></a><a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-decroche-la-bourse-french-tech-fier-d-etre-droneez%2F&amp;title=Droneez%20d%C3%A9croche%20la%20bourse%20French%20tech%20%21%20Fier%20d%27%C3%AAtre%20Droneez.&amp;summary=&amp;source=Droneez" title="LinkedIn" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with LinkedIn</span></a><a class="whatsapp" href="whatsapp://send?text=Droneez%20d%C3%A9croche%20la%20bourse%20French%20tech%20%21%20Fier%20d%27%C3%AAtre%20Droneez.%20-%20https%3A%2F%2Fwww.droneez.com%2Fdroneez-decroche-la-bourse-french-tech-fier-d-etre-droneez%2F" title="WhatsApp" target="_blank" data-action="share/whatsapp/share"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with WhatsApp</span></a><a class="pinterest pinit-marklet" href="https://pinterest.com/pin/create/button/" title="Pinterest" target="_blank" data-pin-config="above" data-pin-do="buttonBookmark"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Pinterest</span></a><a class="google" href="https://plus.google.com/share?url=https%3A%2F%2Fwww.droneez.com%2Fdroneez-decroche-la-bourse-french-tech-fier-d-etre-droneez%2F&amp;title=Droneez+d%C3%A9croche+la+bourse+French+tech+%21+Fier+d%27%C3%AAtre+Droneez." title="Google+" target="_blank"><span class="soc-font-icon"></span><span class="screen-reader-text">Share with Google+</span></a></div></div>
                    </article>`,
                meta: [
                    {name: 'description', content: "DRONEEZ vient de décrocher la&nbsp;bourse French Tech, décernée par la BPI (Banque pour l'Investissement). Cette subvention est le symbole de reconnaissance du caractère innovant de notre activité !&nbsp;"},
                    {property: 'og:locale', content: 'fr_FR'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: "Droneez décroche la bourse French tech ! Fier d'être Droneez - Le Blog Droneez"},
                    {property: 'og:description', content: "DRONEEZ vient de décrocher la&nbsp;bourse French Tech, décernée par la BPI (Banque pour l'Investissement). Cette subvention est le symbole de reconnaissance du caractère innovant de notre activité !&nbsp;"},
                    {property: 'og:url', content: 'https://www.droneez.com/droneez-decroche-la-bourse-french-tech-fier-d-etre-droneez/'},
                    {property: 'og:site_name', content: 'Droneez'},
                    {property: 'article:publisher', content: 'https://www.facebook.com/droneez/'},
                    {property: 'article:tag', content: 'droneez'},
                    {property: 'article:tag', content: 'french tech'},
                    {property: 'article:tag', content: 'pilotage'},
                    {property: 'article:tag', content: 'vol drone'},
                    {property: 'article:section', content: 'Evenements'},
                    {property: 'article:published_time', content: '2017-04-09T11:58:14+02:00'},
                    {property: 'article:modified_time', content: '2018-05-22T13:15:59+02:00'},
                    {property: 'og:updated_time', content: '2018-05-22T13:15:59+02:00'},
                    {property: 'og:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/Sans-titre-4.jpg'},
                    {property: 'og:image:secure_url', content: 'https://www.droneez.com/wp-content/uploads/2018/02/Sans-titre-4.jpg'},
                    {property: 'og:image:width', content: '288'},
                    {property: 'og:image:height', content: '219'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:description', content: "DRONEEZ vient de décrocher la&nbsp;bourse French Tech, décernée par la BPI (Banque pour l'Investissement). Cette subvention est le symbole de reconnaissance du caractère innovant de notre activité !&nbsp;"},
                    {name: 'twitter:title', content: "Droneez décroche la bourse French tech ! Fier d'être Droneez - Le Blog Droneez"},
                    {name: 'twitter:site', content: '@DRONEEZ_fr'},
                    {name: 'twitter:image', content: 'https://www.droneez.com/wp-content/uploads/2018/02/Sans-titre-4.jpg'},
                    {name: 'twitter:creator', content: '@DRONEEZ_fr'},
                    {name: 'author', content: 'Matt'},
                ],
                schemaOrgContent: ['{"@context":"https:\/\/schema.org","@type":"Organization","url":"https:\/\/www.droneez.com\/","sameAs":["https:\/\/www.facebook.com\/droneez\/","https:\/\/www.instagram.com\/droneez_paris\/","https:\/\/twitter.com\/DRONEEZ_fr"],"@id":"https:\/\/www.droneez.com\/#organization","name":"Droneez","logo":"https:\/\/www.droneez.com\/wp-content\/uploads\/2017\/12\/droneez-le-drone-accessible-a-tous.jpg"}'],
                url: 'droneez-decroche-la-bourse-french-tech-fier-d-etre-droneez'
            }
        ];
        let res: any;
        articles.forEach((article)=>{
            if (article.id === id) res = article;
        })
        return res;
    }

}