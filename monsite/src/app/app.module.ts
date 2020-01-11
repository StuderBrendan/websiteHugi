import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }   from './home/home.component';
import { Test1Component }     from './test1/test1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { SalleComponent } from './salle/salle.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test1Component,
    PageNotFoundComponent,
    AppartementsComponent,
    SalleComponent,
    ContactComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
