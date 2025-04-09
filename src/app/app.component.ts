import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactCardComponent, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';

  @Input() contacts: Contact[] = [];
}
