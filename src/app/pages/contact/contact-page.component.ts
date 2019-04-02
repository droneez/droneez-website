import { Component } from '@angular/core';
import { Globals } from "./../../globals";

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  	
  	constructor(private globals: Globals) { }

  	ngOnInit() {
        this.globals.noChangeNavBg = true;
  	}

    ngOnDestroy() {
        this.globals.noChangeNavBg = false;
    }

}
