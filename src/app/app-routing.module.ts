import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AddempComponent } from './addemp/addemp.component';
import { ProdetailsComponent } from './prodetails/prodetails.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"empdetails/:id",component:EmpdetailsComponent
  },
  {
    path:"About",component:AboutComponent
  },
  {
    path:"service",component:ServiceComponent
  },
  {
    path:"addemp",component:AddempComponent
  },
  {
    path:"updateEmp/:id",component:AddempComponent
  },
  {
    path:"prodetails/:id",component:ProdetailsComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
