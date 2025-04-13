import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contacts: Contact[] = [];

  @Output() addingContacts = new EventEmitter<Contact[]>();

  runningId: number = 0;

  contact: Contact = {firstName: "", lastName: "", number: "", email: "", id: this.runningId};

  addContact(firstName:string, lastName:string, number:string, email:string, id:number){
    this.contact = {firstName, lastName, number, email, id};
    this.contacts.push(this.contact);
    this.runningId = this.runningId + 1;
    this.addingContacts.emit(this.contacts);
  }
}
