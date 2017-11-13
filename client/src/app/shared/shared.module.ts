import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import {HyperledgerService} from './services/hyperledger.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
  ],
  providers: [
    HyperledgerService
  ]
})
export class SharedModule { }
