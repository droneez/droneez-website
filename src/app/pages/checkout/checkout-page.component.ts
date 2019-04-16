import { Component, HostListener, Inject, TemplateRef  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Globals } from "./../../globals";
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { BookingService, bookingItemInterface, paymentDatas, paymentItem } from "./../../services/booking.service";

const countries = [" ---  --- ","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua And Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas The","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Republic Of The Congo","Democratic Republic Of The Congo","Cook Islands","Costa Rica","Cote D'Ivoire (Ivory Coast)","Croatia (Hrvatska)","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","External Territories of Australia","Falkland Islands","Faroe Islands","Fiji Islands","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia The","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey and Alderney","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and McDonald Islands","Honduras","Hong Kong S.A.R.","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau S.A.R.","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Man (Isle of)","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands Antilles","Netherlands The","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory Occupied","Panama","Papua new Guinea","Paraguay","Peru","Philippines","Pitcairn Island","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Helena","Saint Kitts And Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent And The Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Smaller Territories of the UK","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard And Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad And Tobago","Tunisia","Turkey","Turkmenistan","Turks And Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City State (Holy See)","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (US)","Wallis And Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zambia","Zimbabwe"];

@Component({
	selector: 'app-checkout-page',
	templateUrl: './checkout-page.component.html',
	styleUrls: ['./checkout-page.component.scss'],
	providers: [{
	    provide: STEPPER_GLOBAL_OPTIONS, 
	    useValue: {showError: true}
	}]
})
export class CheckoutPageComponent {

	screenHeight:number = 0;
    screenWidth:number = 0;
    modalRef: BsModalRef;
	countries: string[];
	countrySelected: string;
	paymentButton: string;
	nextClicked: boolean;
	displayedColumns: string[];
	total: number;
	codeApplied: string[];
	promoMessage: string;
    totalDiscount: number;

	firstFormGroup: FormGroup;
  	secondFormGroup: FormGroup;

  	shoppingBag: bookingItemInterface[];

	constructor(
		@Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) public window,
        private modalService: BsModalService,
        private globals: Globals,
        private formBuilder: FormBuilder,
        private bookingService: BookingService) {
		this.displayedColumns = ['type', 'date', 'range', 'participants', 'price', 'totalPrice'];
	}

	ngOnInit() {
		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
        this.globals.noChangeNavBg = true;
		this.countries = countries;
		this.firstFormGroup = this.formBuilder.group({
	    	firstNameControl: ['', Validators.required],
	    	emailControl: ['', [Validators.required, Validators.email]],
	    	adress1Control: ['', Validators.required],
	    	adress2Control: [''],
	    	companyControl: [''],
	    	postalControl: ['', Validators.required],
	    	lastNameControl: ['', Validators.required],
	    	phoneControl: ['', [Validators.required, Validators.pattern(/[0-9\+\- ]*/)]],
	    	cityControl: ['', Validators.required],
	    	countryControl: ['France', Validators.required],	
	    	checkboxControl: ['', Validators.required]
	    });
	    this.secondFormGroup = this.formBuilder.group({
	    	codeCtrl: ['']
	    });

	    this.nextClicked = false;
	    this.shoppingBag = this.bookingService.getShoppingBag();
	    this.total = this.bookingService.getTotalPrice();
	    this.codeApplied = [];
	    this.promoMessage = "";
	    this.totalDiscount = 0;
	}

	getErrorMailMessage() {
		return this.firstFormGroup.controls.emailControl.hasError('required') ? 'Veuillez renseigner ce champ' :
		this.firstFormGroup.controls.emailControl.hasError('email') ? "l'email doit être valide" :
		'';
	}

	ngOnDestroy() {
        this.globals.noChangeNavBg = false;
    }

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

    onSubmit() {
    	this.nextClicked = true;
    	if (this.firstFormGroup.valid) {
	    	this.bookingService.goPayment(this.parseIntoPaymentDatas()).subscribe( res =>{
	    		this.paymentButton  = `
		  			<form name="redirectForm" method="POST" action=${res.action}>
						<input type="hidden" name="Data" value=${res.Data}>
						<input type="hidden" name="InterfaceVersion" value=${res.InterfaceVersion}>
						<input type="hidden" name="Seal" value=${res.Seal}>
						<button class="btn btn-primary" type="submit">Confirmer</button>
					</form>
				`; 
	        });
	    }
    }

    /* Code promo */
    onSubmitForm2(code: string) {
    	this.promoMessage = "";
    	if(code) {
	    	if(this.codeApplied.indexOf(code) == -1) {
	    		this.bookingService.getReduc(code).subscribe( res => {
	    			if(res){
		    			if(res.isValidate === 1){    
		    				if( res.couponType === "4") {
		    					if(res.couponDiscountType === 1) {
		    						this.total -= +res.couponAmount;
		    						this.totalDiscount += +res.couponAmount;
		    					} else 
		    					if (res.couponDiscountType === 2) {
		    						this.total -= this.total*+res.couponAmount/100;
		    						this.totalDiscount += this.total*+res.couponAmount/100;
		    					}
		    					this.codeApplied.push(code);
		    					this.onSubmit();
		    					this.promoMessage = 'réduction appliquée';
							} else {			
			    				this.shoppingBag.forEach((item)=>{
			    					if( 
			    						(this.codeApplied.indexOf(code) == -1) &&	// applique le code que sur un seul participant
			    						(item.type === "decouverte" && res.couponType === "1" ||
				    					item.type === "immersion" && res.couponType === "2" ||
				    					item.type === "acces-piste" && res.couponType === "3")
				    				) {

				    					if(res.couponDiscountType === 1) {
				    						this.total -= +res.couponAmount;
				    						item.discount += +res.couponAmount;
				    						this.totalDiscount += +res.couponAmount;
				    					} else 
				    					if (res.couponDiscountType === 2) {
				    						this.total -= item.price*+res.couponAmount/100;
				    						item.discount += item.price*+res.couponAmount/100;
				    						this.totalDiscount += item.price*+res.couponAmount/100;
				    					}
				    					this.codeApplied.push(code);
				    					this.onSubmit();
				    					this.promoMessage = 'réduction appliquée';
				    				} 
				    			});
				    		}
		    			} else {
		    				if (res.Message) {
		    					this.promoMessage = res.Message;
		    				} else {
		    					this.promoMessage = 'code promo invalide';
		    				}
		    			}
		    		} else {
				    	this.promoMessage = 'code promo invalide';
		    		}
	    		});
	    	} else {
	    		this.promoMessage = 'réduction déjà appliquée';
	    	}
    	}
    }

    /*
    MY6MD -> 20% sur decouverte

	ITDJ8 -> 20euros sur decouverte

	SZ4WH -> expirer
	*/

    parseIntoPaymentDatas():paymentDatas {
    	let paymentData: paymentDatas = {
    		first_name: this.firstFormGroup.value.firstNameControl,
		    last_name: this.firstFormGroup.value.lastNameControl,
		    customer_address_1: this.firstFormGroup.value.adress1Control,
		    customer_address_2: this.firstFormGroup.value.adress2Control,
		    city: this.firstFormGroup.value.cityControl,
		    country: this.firstFormGroup.value.countryControl,
		    zip: this.firstFormGroup.value.postalControl,
		    company: this.firstFormGroup.value.emailControl,
		    customer_mobile: this.firstFormGroup.value.companyControl,
		    customer_email: this.firstFormGroup.value.emailControl,
		    cart_total: this.total*100,
		    total_discount: "",
		    payment_method: "66",
		    items: []
    	};

    	this.shoppingBag.forEach((item)=>{
    		paymentData.items.push({
    			product_id: item.calendar,
			    qty: item.nbParticipants,
			    slot_id: item.id,
			    seats: item.nbParticipants,
			    calendar_id: item.calendar,
			    price: item.price,
			    discount: item.discount
    		});
    	});

    	paymentData.total_discount = "" + this.totalDiscount;
    	return paymentData;
    }

    openCGV(legal: TemplateRef<any>) {
		this.modalRef = this.modalService.show(legal);
	}

}