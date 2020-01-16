import { Component, HostListener, Output, TemplateRef, Input, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "./../../services/window.service";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Globals } from "./../../globals";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	@Input() forceDisplay: boolean;
	modalRef: BsModalRef;

	screenHeight:number = 0;
  	screenWidth:number = 0;

	constructor(
		private modalService: BsModalService,
		public globals: Globals,
		@Inject(DOCUMENT) private document: Document,
    	@Inject(WINDOW) public window) {
	}

	openModal(legal: TemplateRef<any>) {
		this.modalRef = this.modalService.show(legal);
	}

 	ngOnInit() {
 		this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
	}

	@HostListener('window:resize', []) onResize() {
        this.screenHeight = this.window.innerHeight;
        this.screenWidth = this.window.innerWidth;
    }

}
