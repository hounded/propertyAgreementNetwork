import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgreementsComponent } from './agreements.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
  ],
  declarations: [
    AgreementsComponent,
    TimelineComponent
  ]
})
export class AgreementsModule { }
