import { Component, HostListener, Inject, ViewChild, TemplateRef } from '@angular/core';
import { IgxCalendarComponent, DateRangeType } from 'igniteui-angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { MatTable, MatSnackBar } from '@angular/material';
import { BookingService, BookingData } from "./../../services/booking.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-booking-customer-page',
    templateUrl: './booking-customer-page.component.html',
    styleUrls: ['./booking-customer-page.component.scss']
})
export class BookingCustomerPageComponent {

    displayedColumns: string[];
    schedule: BookingData[];
    type: string;
    date: Date;

	screenHeight: number;
    screenWidth: number;
    formatOptions: any;
    formatViews: any;
    isRace: boolean;
    isNotRace: boolean;
    isLesson: boolean;
    isNotLesson: boolean;
    isDecouverte: boolean;
    isNotDecouverte: boolean;
    isImmersion: boolean;
    isNotImmersion: boolean;
    isAccesPiste: boolean;
    isNotAccesPiste: boolean;
    isEndChoice: boolean;

    modalRef: BsModalRef;

    @ViewChild('calendar', { read: IgxCalendarComponent }) 
    public calendar: IgxCalendarComponent;
    @ViewChild(MatTable) 
    table: MatTable<any>;

    today: Date;
    yesterday: Date;
    range: Date[];

    participantsMax: number;
    participants: number[];
      
    emptyBag: boolean;

    constructor(
  	    @Inject(DOCUMENT) private document: Document,
	    @Inject(WINDOW) public window,
        private modalService: BsModalService,
	    private globals: Globals,
        private bookingService: BookingService,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute,
        private router: Router
    ) { 
  		this.screenHeight = 0;
    	this.screenWidth = 0;
        this.date = new Date(Date.now());
        this.yesterday = new Date();
        this.yesterday.setDate(this.date.getDate() - 1);
        this.range = [new Date('1970-01-01'),this.yesterday];
        this.displayedColumns = ['range', 'participants', 'price', 'addShopping'];
        this.emptyBag = true;
    }

    ngOnInit() {
    	this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
		this.globals.noFooter = true;
        this.formatOptions = { day: "2-digit", month: "long", weekday: "long", year: "numeric" };
        this.formatViews = { day: true, month: true, year: true };
        this.calendar.disabledDates = [{ type: DateRangeType.Between, dateRange: this.range }];
        this.applyCategory(this.route.snapshot.paramMap.get('category'));
    }

    applyCategory(category: string) {
        switch(category) {
            case "race":
                this.isRace = true;
                this.isNotRace = false;
                this.isLesson = false;
                this.isNotLesson = true; 
                break;
            case "lesson":
                this.isRace = false;
                this.isNotRace = true;
                this.isLesson = true;
                this.isNotLesson = false; 
                this.isEndChoice = true;
                break;
            case "decouverte":
                this.isRace = true;
                this.isNotRace = false;
                this.isLesson = false;
                this.isNotLesson = true; 
                this.isDecouverte = true;
                this.isNotDecouverte = false;
                this.isImmersion = false;
                this.isNotImmersion = true;
                this.isAccesPiste = false;
                this.isNotAccesPiste = true;
                this.isEndChoice = true;
                this.type = 'decouverte';
                this.getAvailablePlaces(this.date);
                break;
            case "immersion":
                this.isRace = true;
                this.isNotRace = false;
                this.isLesson = false;
                this.isNotLesson = true; 
                this.isDecouverte = false;
                this.isNotDecouverte = true;
                this.isImmersion = true;
                this.isNotImmersion = false;
                this.isAccesPiste = false;
                this.isNotAccesPiste = true;
                this.isEndChoice = true;
                this.type = 'immersion';
                this.getAvailablePlaces(this.date);
                break;
            case "accesPiste":
                this.isRace = true;
                this.isNotRace = false;
                this.isLesson = false;
                this.isNotLesson = true; 
                this.isDecouverte = false;
                this.isNotDecouverte = true;
                this.isImmersion = false;
                this.isNotImmersion = true;
                this.isAccesPiste = true;
                this.isNotAccesPiste = false;
                this.isEndChoice = true;
                this.type = 'acces-piste';
                this.getAvailablePlaces(this.date);
                break;
            case "default": break;
        }
    }

    getAvailablePlaces(date: Date): void {
        this.bookingService.getAvailablePlaces(date, this.type)
        .subscribe(datas => {
            this.schedule = datas;
        });
    }

    onCalendarClick(date: Date) {
        this.date = date;
        this.getAvailablePlaces(date);
    } 

    toggleShopBag(scheduleItem) {
        if(!scheduleItem.isInShoppingBag) {
            this.bookingService.addToShoppingBag(scheduleItem);
            this.openSnackBar(true);
        } else {
            this.bookingService.removeFromShoppingBag(scheduleItem);
            this.openSnackBar(false);
        }
    }

    checkBag() {
        if(this.bookingService.getShoppingBag().length) {
            this.router.navigate(['/checkout']);  
        } 
    }

    openModal(shoppingBag: TemplateRef<any>) {
        this.modalRef = this.modalService.show(shoppingBag);
    }

    closeModal(event) {
        if (event) this.modalRef.hide();
    }

    openSnackBar(add: boolean) {
        this.snackBar.open(`l'élément a été ${add ? 'ajouté au' : 'supprimé du'} panier`,"",{
            duration: 2000,
        });
    }

    @HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

    ngOnDestroy() {
        this.globals.noChangeNavBg = false;
        this.globals.noFooter = false;
    }
}