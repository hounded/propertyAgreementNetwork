import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import {AgreementsComponent} from './agreements.component';

const routes: Routes = Route.withShell([
  { path: 'agreements', component: AgreementsComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AgreementsRoutingModule { }
