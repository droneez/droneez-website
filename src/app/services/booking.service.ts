import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApiService, Config } from './api.service';

// Donnees a exporter sur le serveur
export interface paymentDatas {
    first_name: string;
    last_name: string;
    customer_address_1: string;
    customer_address_2: string;
    city: string;
    country: string;
    zip: string;
    company: string;
    customer_mobile: string;
    customer_email: string;
    cart_total: number;
    total_discount: string;
    payment_method: string;
    items: paymentItem[];
}

export interface paymentItem {
    product_id: number;
    qty: number;
    slot_id: number;
    seats: number;
    calendar_id: number;
    price: number;
    discount: number;
}

// item du panier
export interface bookingItemInterface {
    price: number;
    nbParticipants: number;
    timeRange: string;
    date: Date;
    type: string;
    calendar: number;
    id: number;
}

// Donnees importees du serveur
export interface scheduleInterface {
    price: number;
    participantsMax: number;
    timeRange: string;
    calendar: number;
    id: number;
    slot_date: string;
}

export interface redirectPaymentInterface {
    Data: string;
    InterfaceVersion: string;
    Seal: string;
    action: string;
    is_done: number;
}

// Donnees a utiliser pour la page booking-customer-page
export class BookingData implements scheduleInterface, bookingItemInterface {

    price: number;
    participantsMax: number;
    participantsArray: number[];
    timeRange: string;
    nbParticipants: number;
    isInShoppingBag: boolean;
    date: Date;
    type: string;
    id: number;
    calendar: number;
    slot_date: string;

    constructor(schedule:scheduleInterface, date: Date, type: string ) {
        this.price = schedule.price;
        this.participantsMax = schedule.participantsMax;
        this.timeRange = schedule.timeRange;
        this.nbParticipants = 0;
        this.isInShoppingBag = false;
        this.participantsArray = [];
        for (let i = 0; i <= this.participantsMax; i++) {
            this.participantsArray[i] = i;
        }
        this.date = date;
        this.type = type;
        this.id = schedule.id;
        this.calendar = schedule.calendar;
        this.slot_date = schedule.slot_date;
    }
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
        //'Authorization': 'my-auth-token'
    })
};

/*const MOCK_DATA_1: scheduleInterface[] = [
    { price: 25, participantsMax: 6, timeRange: '10:00 - 11:00', calendar: "1", id: "10"},
    { price: 25, participantsMax: 6, timeRange: '11:00 - 12:00', calendar: "1", id: "11"},
    { price: 25, participantsMax: 6, timeRange: '12:00 - 13:00', calendar: "1", id: "12"},
    { price: 25, participantsMax: 6, timeRange: '13:00 - 14:00', calendar: "1", id: "13"},
    { price: 25, participantsMax: 6, timeRange: '14:00 - 15:00', calendar: "1", id: "14"},
    { price: 25, participantsMax: 6, timeRange: '15:00 - 16:00', calendar: "1", id: "15"},
    { price: 25, participantsMax: 6, timeRange: '16:00 - 17:00', calendar: "1", id: "16"},
    { price: 25, participantsMax: 6, timeRange: '17:00 - 18:00', calendar: "1", id: "17"},
    { price: 25, participantsMax: 6, timeRange: '18:00 - 19:00', calendar: "1", id: "18"},
    { price: 25, participantsMax: 6, timeRange: '19:00 - 20:00', calendar: "1", id: "19"}
];

const MOCK_DATA_2: scheduleInterface[] = [
    { price: 35, participantsMax: 6, timeRange: '10:00 - 11:00', calendar: "2", id: "20"},
    { price: 35, participantsMax: 6, timeRange: '11:00 - 12:00', calendar: "2", id: "21"},
    { price: 35, participantsMax: 6, timeRange: '12:00 - 13:00', calendar: "2", id: "22"},
    { price: 35, participantsMax: 6, timeRange: '13:00 - 14:00', calendar: "2", id: "23"},
    { price: 35, participantsMax: 6, timeRange: '14:00 - 15:00', calendar: "2", id: "24"},
    { price: 35, participantsMax: 6, timeRange: '15:00 - 16:00', calendar: "2", id: "25"},
    { price: 35, participantsMax: 6, timeRange: '16:00 - 17:00', calendar: "2", id: "26"},
    { price: 35, participantsMax: 6, timeRange: '17:00 - 18:00', calendar: "2", id: "27"},
    { price: 35, participantsMax: 6, timeRange: '18:00 - 19:00', calendar: "2", id: "28"},
    { price: 35, participantsMax: 6, timeRange: '19:00 - 20:00', calendar: "2", id: "29"'}
];*/

@Injectable({
  	providedIn: 'root'
})
export class BookingService {

	private scheduleUrl: string;
    private paymentUrl: string;
	private shoppingBag: bookingItemInterface[];
	private schedule: scheduleInterface[];
    private displayedDatas: BookingData[];
    private config: Config;
    private totalPrice: number;
    private bob: string;

  	constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { 
        this.scheduleUrl = "";
        this.paymentUrl = "";
        apiService.getConfig().subscribe((data: Config) => {
            this.config = { ...data };
            console.dir(this.config);
            console.dir(data);
            this.scheduleUrl = this.config.urls[0].scheduleUrl;
            this.paymentUrl = this.config.urls[0].paymentUrl;
        })
        /*this.shoppingBag = JSON.parse(localStorage.getItem("shoppingBag"));
  		if(!this.shoppingBag)*/ this.shoppingBag = [];
        this.totalPrice = 0;

        
  	}

    getdDisplayedDatas(): BookingData[] {
        return this.displayedDatas;
    }

  	addToShoppingBag (item: BookingData) {
        let bookingItem: bookingItemInterface = {
            price: item.price,
            nbParticipants: item.nbParticipants,
            timeRange: item.timeRange,
            date: item.date,
            type: item.type,
            calendar: item.calendar,
            id: item.id
        }
  		this.shoppingBag.push(bookingItem);
        item.isInShoppingBag = true;
        /*localStorage.setItem("shoppingBag", JSON.stringify(this.shoppingBag));*/
  	}

  	removeFromShoppingBag (item: BookingData | bookingItemInterface) {
  		let bagIndex = -1;
  		let pageIndex = -1;
  		this.shoppingBag.forEach((bookingItem, i) => {
  			if(	item.type === bookingItem.type && 
  				item.timeRange === bookingItem.timeRange && 
  				item.date.toLocaleDateString('fr-FR') === bookingItem.date.toLocaleDateString('fr-FR')
  			) {
  				bagIndex = i;
  			}
  		});
        if(bagIndex > -1) {
            this.shoppingBag.splice(bagIndex, 1);
           /* localStorage.setItem("shoppingBag", JSON.stringify(this.shoppingBag));*/
        }

  		this.displayedDatas.forEach((bookingData, i) => {
  			if(	item.type === bookingData.type && 
  				item.timeRange === bookingData.timeRange && 
  				item.date.toLocaleDateString('fr-FR') === bookingData.date.toLocaleDateString('fr-FR')
  			) {
  				pageIndex = i;
  			}
  		});
  		if(pageIndex > -1) {
	  		this.displayedDatas[pageIndex].isInShoppingBag = false;
			this.displayedDatas[pageIndex].nbParticipants = 0;
		}
  	}

  	getShoppingBag(): bookingItemInterface[] {
  		return this.shoppingBag;
  	}

  	sendShoppingBag() {
        if(this.shoppingBag.length) {
            let url = this.paymentUrl;
            let observable: Observable<bookingItemInterface[]>;
            observable = this.http.post<bookingItemInterface[]>(url, this.shoppingBag, httpOptions)
                .pipe(
                    catchError(this.handleError<bookingItemInterface[]>("sendShoppingBag"))
                );
            observable.subscribe( res =>{
                console.dir(res);
            });
        }
  	}

    goPayment(paymentDatas: paymentDatas): Observable<redirectPaymentInterface> {
        if(this.shoppingBag.length) {
            let url = this.paymentUrl;
            return this.http.post<redirectPaymentInterface>(url, paymentDatas, httpOptions)
                .pipe(
                    catchError(this.handleError<redirectPaymentInterface>("sendShoppingBag")),
                );
        }
    }

    getTotalPrice(): number {
        this.totalPrice = 0;
        this.shoppingBag.forEach(item=>{
            this.totalPrice += (+item.nbParticipants)*(+item.price);
        });
        return this.totalPrice;
    }

  	getAvailablePlaces(date: Date, type: string): Observable<BookingData[]> {
  		let url = `${this.scheduleUrl}/${type}/${("0" + date.getDate()).slice(-2)}${("0" + (date.getMonth() + 1)).slice(-2)}${date.getFullYear()}`;
  		return this.http.get<scheduleInterface[]>(url)
  			.pipe(
                map((schedule) => {
                    console.dir(schedule);
                    this.displayedDatas = schedule.map(item =>  new BookingData(item, date, type));
                    this.displayedDatas.forEach(displayedItem => {
                        this.shoppingBag.forEach(shoppingItem => {
                            if( displayedItem.type === shoppingItem.type && 
                                displayedItem.timeRange === shoppingItem.timeRange && 
                                displayedItem.date.toLocaleDateString('fr-FR') === shoppingItem.date.toLocaleDateString('fr-FR')) {
                                
                                displayedItem.isInShoppingBag = true;
                                displayedItem.nbParticipants = shoppingItem.nbParticipants;
                            }
                        })
                    });
                    return this.displayedDatas;
                }),
  				tap((datas) => {
  					console.log(`fetched schedule from ${date.toLocaleDateString('fr-FR')}`);
  				}),
  				catchError(this.handleError<BookingData[]>(`getAvailablePlaces date=${date.toLocaleDateString('fr-FR')}`))
  			);

        /* MOCK DATAS */
  		/*if( +(date.toString().substring(8,10))%2 == 0) {
            this.displayedDatas = MOCK_DATA_1.map(item =>  new BookingData(item.price, item.participantsMax, item.timeRange, item.id, item.calendar, date, type));
        } else {
        	this.displayedDatas = MOCK_DATA_2.map(item =>  new BookingData(item.price, item.participantsMax, item.timeRange, item.id, item.calendar, date, type));
        }
        this.displayedDatas.forEach(displayedItem => {
            this.shoppingBag.forEach(shoppingItem => {
                if( displayedItem.type === shoppingItem.type && 
                    displayedItem.timeRange === shoppingItem.timeRange && 
                    displayedItem.date.toLocaleDateString('fr-FR') === shoppingItem.date.toLocaleDateString('fr-FR')) {

                    displayedItem.isInShoppingBag = true;
                    displayedItem.nbParticipants = shoppingItem.nbParticipants;
                }
            })
        });
        return of(this.displayedDatas);*/
  	}

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead     

			// TODO: better job of transforming error for user consumption
			console.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}