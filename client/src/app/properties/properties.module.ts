import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PropertiesComponent} from './properties.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {PropertiesRoutingModule} from "./properties-routing.module";

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SidebarModule,
    PropertiesRoutingModule
  ],
  declarations: [
    PropertiesComponent,
  ]
})
export class PropertiesModule { }
