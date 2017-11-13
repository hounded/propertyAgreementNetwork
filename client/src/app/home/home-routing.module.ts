import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { HomeComponent } from './home.component';
import {AgreementsComponent} from '../agreements/agreements.component';
import {PropertiesComponent} from '../properties/properties.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: extract('Home') }, children: [{
      path: 'agreements',
      component: AgreementsComponent
    },
    {
      path: 'properties',
      component: PropertiesComponent
    }]}
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
