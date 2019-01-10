import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  firstName: string;
  lastName: string;
  email: string;
  message: string;

  ngOnInit() {
  }

  processForm() {
  	
  }

}
