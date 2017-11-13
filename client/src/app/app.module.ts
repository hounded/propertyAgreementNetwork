import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import {AgreementsModule} from './agreements/agreements.module';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    CoreModule,
    NgbModule.forRoot(),
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,
    AgreementsModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, PropertiesComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
