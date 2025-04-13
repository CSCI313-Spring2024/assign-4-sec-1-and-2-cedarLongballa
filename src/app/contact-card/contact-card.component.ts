import { Component, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contacts: Contact[] = [];

  editContact(id: number){

  }

  deleteContact(id: number){
    
  }
}
