import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { EnlaceOverDirective } from './enlace-over.directive';
import { EnlaceOverPersonalizadoDirective } from './enlace-over-personalizado.directive';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    EnlaceOverDirective,
    EnlaceOverPersonalizadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
