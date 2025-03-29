import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmplistComponent } from './emplist/emplist.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component'
import { FormsModule } from '@angular/forms';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AddempComponent } from './addemp/addemp.component';
import { ProdetailsComponent } from './prodetails/prodetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    EmplistComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    EmpdetailsComponent,
    AboutComponent,
    ServiceComponent,
    AddempComponent,
    ProdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
