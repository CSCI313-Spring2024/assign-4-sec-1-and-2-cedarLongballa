import { Component, inject } from '@angular/core';
import { Contact } from '../contact';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  private dataService = inject(DataService);
  private runningId = 0;

  addContact(firstName: string, lastName: string, number: string, email: string) {
    const newContact: Contact = {
      firstName,
      lastName,
      number,
      email,
      id: this.runningId++
    };
    this.dataService.addContact(newContact);
  }
}