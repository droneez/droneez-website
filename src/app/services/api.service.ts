import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError  } from 'rxjs';
import { scheduleInterface  } from './booking.service';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        /*'Access-Control-Allow-Origin': '*'*/
        //'Authorization': 'my-auth-token'
    })
};

export interface Config {
    urls: [
        {
            scheduleUrl: string,
            contactUrl: string,
            paymentUrl: string,
            couponUrl: string
            //articlesUrls: string[]
        }
    ]
}

/*{"isValidate":1,"couponDiscountType":2,"couponAmount":"20","couponType":"0"}*/

@Injectable({
  	providedIn: 'root'
})
export class ApiService {

    //scheduleUrl = 'assets/config.json';

    constructor(private http: HttpClient) { 

    }
/*
    // POST
    addHero (hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }

    // DELETE
    deleteHero (id: number): Observable<{}> {
      const url = `${this.heroesUrl}/${id}`; // DELETE api/heroes/42
      return this.http.delete(url, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }

    // PUT
    updateHero (hero: Hero): Observable<Hero> {
      return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
        .pipe(
          catchError(this.handleError)
        );
    }

    // GET
    getSchedule() {
        return this.http.get<scheduleInterface>(this.scheduleUrl)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }*/

    getConfig() {
        return this.http.get<Config>(environment.configAPIUrl)
            .pipe(
                retry(3), // retry a failed request up to 3 times
                catchError(this.handleError) // then handle the error
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error.error.message}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
    };

}