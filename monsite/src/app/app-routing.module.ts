import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { SalleComponent } from './salle/salle.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'appartements', component: AppartementsComponent },
  { path: 'salle', component: SalleComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
