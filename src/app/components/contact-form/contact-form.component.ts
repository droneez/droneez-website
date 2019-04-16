import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ApiService, Config } from './../../services/api.service';
import { Moment } from 'moment';
import { MatSnackBar } from '@angular/material';

/*export interface datas {
    type: string;
    firstName: string;
    company: string;
    lastName: string;
    email: string;
    message: string;
    contact: string;
    phone: number;
    certifDuration: string;
    animationType: string;
    participantsNumber: number;
    duration: string;
}*/

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
    })
};

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    // reservation-formation ; reservation-teambuilding ; reservation-evenement ; reservation-cours-particulier ; reservation-evenement-particulier
    @Input() type: string; 
    // nombre de lignes du textarea;
    @Input() rows: number;
    formGroup: FormGroup;
    httpOptions: any;
    contactUrl: string;
    config: Config;
    datas: any;
    checked:boolean;

    /*firstName: string;
    company: string;
    lastName: string;
    email: string;
    message: string;
    contact: string;
    phone: number;
    certifDuration: string;
    animationType: string;
    participantsNumber: number;
    duration: string;*/

    // select
    dureeSelected: string;
    cocktailSelected: string;
    boissonSelected: string;
    privatiseSelected: string;
    participantSelected: string;
    statutSelected: string;
    monthSelected: string;
    multiAnimSelected: string;
    // Checkbox
    lieux: string[] = [];
    volieres: string[] = [];
    types: string[] = [];
    animations: string[] = [];
    horaires: string[] = [];

    // select values
    months: string[] = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    participantsTelepilote: string[] = ['1','2','3','4','5','6','7','8','9','10'];
    participants: string[] = ['inf à 20','21 à 50','51 à 100','plus de 100'];
    participantsEventCustomer: string[] = ['1 à 8','9 à 20','21 à 50','51 à 100', 'plus de 100'];
    statutsTelepilote: string[] = ['Etudiant','Intermittent','Indépendant','Société','Salarié',"Demandeur d'Emploi"," "];
    statutsTeambuilding: string[] = ['Etudiant','Intermittent','Auto-entrepreneur','EURL','SAS/SARL','Salariés','Société'," "];
    boissons: string[] = ['2 boissons par personne','Open soft & 1 boisson alcoolisée par personne','Open Bar','Vos boissons','Aucun'];
    cocktails: string[] = ['Planches','Cocktail Light','Cocktail Copieux','Votre traiteur','Aucun'];
    durees: string[] = ['1 à 3H','Demi-journée','Journée','Plusieurs journées'];
    dureesEventCustomer: string[] = ['1 à 3H','Demi-journée','Journée','Soirée'];
    privatise: string[] = ['Oui','Non'];
    multiAnim: string[] = ['Oui','Non'];
    // chekbox values
    checkboxLieux: string[] = ["Droneez","Lieu de votre choix"];
    checkboxVolieres: string[] = ["Intérieur","Extérieur", "Les 2"];
    checkboxTypesTB: string[] = ["Séminaire","Team Building","Animation","Salon"];
    checkboxTypesEP: string[] = ["Anniversaire","Célébration","Animation"];
    checkboxTypesEE: string[] = ["Séminaire","Animation","Salon"];
    checkboxAnimationsTB: string[] = ["Initiation drone course","DIY montage de drones","Démonstration Immersion (vol avec lunettes)", "Pilotage drone de prise de vue"];
    checkboxAnimations: string[] = ["Initiation drone course","Démonstration Immersion (vol avec lunettes)", "Pilotage drone de prise de vue"];
    checkboxHoraires: string[] = ["Matin","Après-midi","Soirée","Autres"];
    
    myFilter = (d: Moment): boolean => {
        let today = new Date(Date.now());
        return Math.floor(d.toDate().getTime()/1000/3600/24) >= Math.floor(today.getTime()/1000/3600/24)-1;
    }

    constructor(
        private http: HttpClient, 
        private apiService: ApiService,
        private snackBar: MatSnackBar,
        private formBuilder: FormBuilder
    ) {
        apiService.getConfig().subscribe((data: Config) => {
            this.config = { ...data };
            this.contactUrl = this.config.urls[0].contactUrl;
        })
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            lastNameControl: ['', Validators.required],
            firstNameControl: ['', Validators.required],
            companyControl: [''],
            emailControl: ['', [Validators.required, Validators.email]],
            statutControl: [''],
            domainControl: [''],
            opcaControl: [''],
            phoneControl: ['', [Validators.required, Validators.pattern(/[0-9\+\- ]*/)]],
            monthControl: [''],
            participantControl: [''],   
            messageControl: [''],
            posteControl: [''],
            optionsControl: [''],
            budgetControl: [''],
            boissonControl: [''],
            cocktailControl: [''],
            durationControl: [''],
            privatiseControl: [''],
            dateControl: [''],
            multiAnimControl: ['']
        });
        this.checked = false;
    }

    getErrorMailMessage() {
        return this.formGroup.controls.emailControl.hasError('required') ? 'Veuillez renseigner ce champ' :
        this.formGroup.controls.emailControl.hasError('email') ? "l'email doit être valide" :
        '';
    }

    getErrorPhoneMessage() {
        return this.formGroup.controls.phoneControl.hasError('required') ? 'Veuillez renseigner ce champ' : 
        this.formGroup.controls.phoneControl.hasError('pattern') ? "le numéro doit être valide" :
        '';
    }

    openSnackBar(message) {
        this.snackBar.open(message,"",{
            duration: 2000,
        });
    }

    onChange(title,name,value){
        if(value) {
            this[title].push(name);
        } else if (this[title].indexOf(name) !== -1) {
            this[title].splice(this[title].indexOf(name),1);
        }
    }

    onSubmit() {
    	if(this.formGroup.valid) {
	        this.datas = {
	            type: this.type,
	            lastName: this.formGroup.controls.lastNameControl.value,
	            firstName: this.formGroup.controls.firstNameControl.value,
	            company: this.formGroup.controls.companyControl.value,
	            email: this.formGroup.controls.emailControl.value,
	            statut: this.statutSelected,
	            domain: this.formGroup.controls.domainControl.value,
	            opca: this.formGroup.controls.opcaControl.value,
	            phone: this.formGroup.controls.phoneControl.value,
	            formationMonth: this.monthSelected,
	            participantsNumber: this.participantSelected,
	            message: this.formGroup.controls.messageControl.value,
	            poste: this.formGroup.controls.posteControl.value,
	            options: this.formGroup.controls.optionsControl.value,
	            budget: this.formGroup.controls.budgetControl.value,
	            boisson: this.boissonSelected,
	            cocktail: this.cocktailSelected,
	            duree: this.dureeSelected,
	            privatise: this.privatiseSelected,
	            date:  this.formGroup.controls.dateControl.value ? ("0" + this.formGroup.controls.dateControl.value.toDate().getDate()).slice(-2)+'/'+
                    ("0" + (this.formGroup.controls.dateControl.value.toDate().getMonth()+1)).slice(-2)+'/'+
                    this.formGroup.controls.dateControl.value.toDate().getFullYear() : "",
	            multiAnim: this.multiAnimSelected,
	            lieux: this.lieux,
	            volieres: this.volieres,
	            types: this.types,
	            animations: this.animations,
	            horaires: this.horaires
	        };
	        this.sendDatas(this.datas);
	    }
    }

    sendDatas(datas: any) {
        let url = this.contactUrl;
        let observable: Observable<any[]>
        observable = this.http.post<any[]>(url, datas, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
        observable.subscribe(() =>{
            this.openSnackBar("Votre message a bien été envoyé");
        }, error => {
            this.openSnackBar(error);
        });
    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, message was: "${error.message}"`);
        }
        // return an observable with a user-facing error message
        return throwError("Une erreur est survenue, veuillez réessayer plus tard.");
    }
}
