import { Component, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Output() contacts: Contact[] = [];

  contact: Contact = {firstName: "", lastName: "", number: "", email: ""};

  addContact(firstName:string, lastName:string, number:string, email:string){
    this.contact = {firstName, lastName, number, email};
    this.contacts.push(this.contact);
  }
}
