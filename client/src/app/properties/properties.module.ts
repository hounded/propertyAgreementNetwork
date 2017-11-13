import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PropertiesComponent} from './properties.component';
import {SidebarModule} from '../sidebar/sidebar.module';
import {PropertiesRoutingModule} from './properties-routing.module';
import {HyperledgerService} from '../shared/services/hyperledger.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SidebarModule,
    FormsModule,
    PropertiesRoutingModule
  ],
  declarations: [
    PropertiesComponent,
  ],
  providers: [
    HyperledgerService
  ]
})
export class PropertiesModule { }
