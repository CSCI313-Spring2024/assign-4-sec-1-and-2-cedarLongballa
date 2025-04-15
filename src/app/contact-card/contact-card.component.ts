import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  @Input() contacts!: Contact[];
  @Output() deleted = new EventEmitter<number>();

  deleteContact(id: number) {
    this.deleted.emit(id);
  }
}
