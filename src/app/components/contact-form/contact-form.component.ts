import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { ApiService, Config } from './../../services/api.service';

export interface datas {
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
}

export interface month {
    value: string,
    viewValue: string
}

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

    @Input() type: string;
    @Input() certification: boolean;
    @Input() business: boolean;
    @Input() customer: boolean;
    @Input() rows: number;

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

    httpOptions: any;
    contactUrl: string;

    config: Config;
    datas: datas;

    monthControl = new FormControl('', [Validators.required]);
    participantControl = new FormControl('', [Validators.required]);

    months: month[] = [
        {value: 'janvier', viewValue: 'Janvier'},
        {value: 'fevrier', viewValue: 'Février'},
        {value: 'mars', viewValue: 'Mars'},
        {value: 'avril', viewValue: 'Avril'},
        {value: 'mai', viewValue: 'Mai'},
        {value: 'juin', viewValue: 'Juin'},
        {value: 'juillet', viewValue: 'Juillet'},
        {value: 'aout', viewValue: 'Août'},
        {value: 'septembre', viewValue: 'Septembre'},
        {value: 'octobre', viewValue: 'Octobre'},
        {value: 'novembre', viewValue: 'Novembre'},
        {value: 'decembre', viewValue: 'Décembre'}
    ];

    participants: number[] = [1,2,3,4,5];

    constructor(
        private http: HttpClient, 
        private apiService: ApiService
    ) {
        apiService.getConfig().subscribe((data: Config) => {
            this.config = { ...data };
            this.contactUrl = this.config.urls[0].contactUrl;
        })
    }

    ngOnInit() {
    }

    processForm() {
        this.datas = {
            type: this.type,
            firstName: this.firstName,
            company: this.company,
            lastName: this.lastName,
            email: this.email,
            message: this.message,
            contact: this.contact,
            phone: this.phone,
            certifDuration: this.certifDuration,
            animationType: this.animationType,
            participantsNumber: this.participantsNumber,
            duration: this.duration
        };
        console.dir(this.datas);
        this.sendDatas(this.datas);
    }

    sendDatas(datas: datas) {
        let url = this.contactUrl;
        let observable: Observable<datas[]>
        observable = this.http.post<datas[]>(url, datas, httpOptions)
            .pipe(
                catchError(this.handleError)
            );
        observable.subscribe( res =>{
            console.dir(res);
        });
    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError("Une erreur est survenue; veuillez réessayer plus tard.");
    }
}
