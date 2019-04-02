import { Component, HostListener, Inject, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "./../../services/window.service";
import { Globals } from "./../../globals";
import { BookingService, bookingItemInterface, scheduleInterface } from "./../../services/booking.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	isCollapsed = false;
	toggleAnim = false;
	isReachingTop = true;
	offset = 0;
	modalRef: BsModalRef;
	shoppingBag: bookingItemInterface[];

	constructor(
  		@Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) private window,
    	private modalService: BsModalService,
    	public globals: Globals,
    	private BookingService: BookingService) {
  	}

	ngOnInit() {
		this.getShoppingBag();
	}

	openModal(shoppingBag: TemplateRef<any>) {
		this.modalRef = this.modalService.show(shoppingBag);
	}

	closeModal(event) {
		if(event) {
			this.modalRef.hide();
		}
	}

	toggleCollapse() {
		// A l ouverture
		if(!this.isCollapsed) {
			this.isCollapsed = true;
			// Le temps que l element s affiche dans le dom via display:block
			setTimeout(()=>{
				this.toggleAnim = true;
			},30);
		// A la fermeture
		} else {
			this.toggleAnim = false;
			// Le temps que l animation se termine
			setTimeout(()=>{
				this.isCollapsed = false;
			},200);
		}
	}

	getShoppingBag() {
  		this.shoppingBag = this.BookingService.getShoppingBag();
  	}

	@HostListener("window:scroll", [])
	onWindowScroll() {
	    this.offset = this.window.pageYOffset || 
	    	this.document.documentElement.scrollTop || 
	    	this.document.body.scrollTop || 
	    	0;
	    if (this.offset < 200) {
	    	this.isReachingTop = true;
	    } else {
	    	this.isReachingTop = false;
	    }
	}

}
