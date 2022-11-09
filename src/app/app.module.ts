import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { EnlaceOverDirective } from './enlace-over.directive';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    EnlaceOverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
