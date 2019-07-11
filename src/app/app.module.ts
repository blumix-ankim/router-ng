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
import {FormsModule} from '@angular/forms';
import * as firebase from 'firebase';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';

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
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ng-201907')
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    AngularFirestore

  ],
  bootstrap: [AppComponent],

})
export class AppModule {

}
