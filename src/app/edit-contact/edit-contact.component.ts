import { Component, inject } from '@angular/core';
import { Contact } from '../contact';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {

  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private router = inject(Router);

  contact: Contact = { firstName: '', lastName: '', number: '', email: '', id: -1 };

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.dataService.getContactById(id);
    if (found) this.contact = { ...found };
  }

  editContact() {
    this.dataService.updateContact(this.contact.id, this.contact);
    this.router.navigate(['/home']);
  }
}
