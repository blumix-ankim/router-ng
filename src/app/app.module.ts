import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeKr from '@angular/common/locales/ko';
import localeId from '@angular/common/locales/id';
import {ShortenPipe} from '../pips/shorten.pipe';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeKr, 'kr');
registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
  ],
  bootstrap: [AppComponent],

})
export class AppModule {

}
