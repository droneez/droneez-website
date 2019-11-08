import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { BookingService, bookingItemInterface } from "./../../services/booking.service";
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  	selector: 'app-shopping-bag',
  	templateUrl: './shopping-bag.component.html',
  	styleUrls: ['./shopping-bag.component.scss']
})
export class ShoppingBagComponent {

	shoppingBag: bookingItemInterface[];
	displayedColumns: string[];
    total: number;

    @Output() closeModalRequest = new EventEmitter<boolean>();

	@ViewChild(MatTable, { static: false }) 
	table: MatTable<any>;

  	constructor(private BookingService: BookingService) {
  		this.displayedColumns = ['type', 'date', 'range', 'participants', 'price', 'removeShopping'];
        this.total = 0;
  	}

  	ngOnInit() {
  		this.getShoppingBag();
        this.total = this.BookingService.getTotalPrice();
  	}

  	removeFromShopBag(bookingItem: bookingItemInterface) {
  		this.BookingService.removeFromShoppingBag(bookingItem);
        this.total = this.BookingService.getTotalPrice();
  		this.table.renderRows();
  	}

  	getShoppingBag() {
  		this.shoppingBag = this.BookingService.getShoppingBag();
  	}

    closeModal() {
        this.closeModalRequest.emit(true);
    }

}
