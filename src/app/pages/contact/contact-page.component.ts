import { Component } from '@angular/core';
import { Globals } from "./../../globals";

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

	/*name: string;
  	email: string;
  	message: string;*/
  	
  	constructor(private globals: Globals) { }

  	ngOnInit() {
        this.globals.noChangeNavBg = true;
  	}

  	/*processForm() {
	    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
	    alert(allInfo); 
	}*/

    ngOnDestroy() {
        this.globals.noChangeNavBg = false;
    }

}
