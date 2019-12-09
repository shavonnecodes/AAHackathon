import { NgModule, ComponentFactoryResolver, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProfileComponent } from './components/profile/profile.component';

import * as components from './components';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: components.HomeComponent},
    {path: 'checkout', component: components.CheckoutComponent},
    {path: 'profile', component: components.ProfileComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class FlightsRoutingModule { }
=======
export class FlightsRoutingModule { }
>>>>>>> 5ef5d69b1e04dffba14119bd98866a4baa5bdd7c
