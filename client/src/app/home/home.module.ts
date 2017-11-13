import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import {SidebarModule} from '../sidebar/sidebar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    NgbModule,
    HomeRoutingModule,
    SidebarModule
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
