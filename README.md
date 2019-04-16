Ce projet a été fait avec Angular. 

https://angular.io/guide/quickstart pour voir comment débuter un projet angular mais je vais faire ici un recap:

INSTALLATION DU PROJET:

Pour installer le projet voilà comment faire :

1. Telecharger Node.js :

nodejs.org

2. Ensuite il faut telecharger Angular via npm, donc dans un terminal il faut entrer la commande suivante :

npm install -g @angular/cli

3. Ensuite il faut cloner le projet (à partir de ce dépot git) :

git clone https://github.com/droneez/droneez-website.git

4. Il faut rentrer dans le dossier du projet :

cd droneez-website

5. Il faut ensuite installer tous les packages du projet en entrant la commande suivante :

npm install

6. Pour vérifier que le site fonctionne, on lance un serveur local via angular, ainsi il faut entrer la commande suivante :

ng serve --open

Le site doit se lancer tout seul sur l'url suivante : http://localhost:4200
Une fois le serveur local lancé on peut faire des modifs sur le site et à chaque modification des fichiers, le serveur se met à jour automatiquement, pas besoin de rafraichir la page sur le navigateur.

-------------------------------------------------------------------------------------------

BUILD et DEPLOIEMENT:

Pour déployer le projet sur un serveur distant:

1. il faut compiler le projet en entrant la commande suivante :

ng build --prod

Le projet sera minimifié et le build se trouvera dans le dossier "dist" à la racine du projet.

2. Il faut ensuite copier tout ce qui se trouve dans le répertoire dist/droneez-website/ vers la racine du serveur.

3. Il faut ensuite rajouter à la racine du serveur le fichier .htaccess qui se trouve à la racine du projet.

--------------------------------------------------------------------------------------------

PLUGINS:

Au projet Angular j'ai ajouté différents plugins dont :

FontAwesome : pour certaines icones
Bootstrap v.4 : pour le positionnement et le responsive (ngx-bootstrap en fait)
Material Angular : pour différents composants
IgxCalendar : pour le calendrier de reservation (igniteui-angular)
ngx-scrollbar : pour le scroll des formulaires

---------------------------------------------------------------------------------------------


ARCHITECTURE DES DOSSIERS:

Tout les fichiers du site se trouvent dans le dossier /src

Les différents components du site se trouvent dans la partie src/app
On y trouve les pages du sites, les directives ainsi que les différents services et les composants utilisés dans les pages. On y trouve  égalements les articles de la partie Actualité.

Le site est donc découpés en fonctionnalité. Dans le dossier src/app/page par exemple on va retrouver un dossier par page du site. Dans ce dossier on y trouve le javascript (ou plutot le typescript de la page, les fichiers ".ts"), on y trouve le html de la page et le css associé à cette page. Pour le css, c'est du SCSS en fait qui est utilisé. 

Le fichier Globals.ts dans src/app est un fichier qui regroupe les varialbes globales utilisées dans tout le projet.

Dans le dossier src/assets on retrouve les images, fonts et icones utilisées dans le site.











# DroneezWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
