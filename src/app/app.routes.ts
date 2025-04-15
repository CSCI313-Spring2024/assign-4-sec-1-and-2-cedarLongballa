import { Routes } from '@angular/router';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
            path: 'edit/:id',
            component: EditContactComponent,
            title: 'Edit Contact'
        },
        {
            path: 'home',
            component: HomeComponent,
            title: 'Home button',
        },
        { 
            path: '',
            redirectTo: 'home', 
            pathMatch: 'full' 
        },
];
