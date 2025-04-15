import { Component, inject } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactFormComponent, ContactCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dataService = inject(DataService);

  contacts = this.dataService.contacts;

  handleDelete(id: number) {
    this.dataService.deleteContact(id);
  }
}