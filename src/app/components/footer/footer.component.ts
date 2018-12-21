import { Component, Output, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Globals } from "./../../globals";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	modalRef: BsModalRef;

	constructor(
		private modalService: BsModalService,
		private globals: Globals) {
	}

	openModal(legal: TemplateRef<any>) {
		this.modalRef = this.modalService.show(legal);
	}

 	ngOnInit() {
	}

}
