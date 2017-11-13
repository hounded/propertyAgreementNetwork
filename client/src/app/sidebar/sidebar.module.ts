import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SidebarComponent} from './sidebar.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    TranslateModule,
    CommonModule,
  ],
  declarations: [
    SidebarComponent,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
