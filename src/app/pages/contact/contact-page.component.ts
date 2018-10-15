import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

	name: string;
  	email: string;
  	message: string;
  	
  	constructor() { }

  	ngOnInit() {
  	}

  	processForm() {
	    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
	    alert(allInfo); 
	}

}
