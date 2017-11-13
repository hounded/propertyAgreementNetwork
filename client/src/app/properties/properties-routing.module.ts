import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import {PropertiesComponent} from './properties.component';

const routes: Routes = Route.withShell([
  { path: 'properties', component: PropertiesComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PropertiesRoutingModule { }
