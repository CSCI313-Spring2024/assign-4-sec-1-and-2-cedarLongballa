import { Injectable, signal } from '@angular/core';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contactsData = signal<Contact[]>([]);


  get contacts() {
    return this.contactsData;
  }

  addContact(contact: Contact) {
    this.contactsData.update(contacts => [...contacts, contact]);
  }

  updateContact(id: number, updatedContact: Contact) {
    this.contactsData.update(contacts =>
      contacts.map(c => (c.id === id ? updatedContact : c))
    );
  }

  deleteContact(id: number) {
    this.contactsData.update(contacts => contacts.filter(c => c.id !== id));
  }

  getContactById(id: number): Contact | undefined {
    return this.contactsData().find(c => c.id === id);
  }
}
