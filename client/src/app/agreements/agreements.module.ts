import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsComponent } from './agreements.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SidebarModule} from '../sidebar/sidebar.module';
import {AgreementsRoutingModule} from './agreements-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    SidebarModule,
    AgreementsRoutingModule,
  ],
  declarations: [
    AgreementsComponent,
    TimelineComponent

  ]
})
export class AgreementsModule { }
