import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EcSelectorComponent } from './ec-selector/ec-selector.component';
import { EcMenuComponent } from './ec-menu/ec-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EcSelectorComponent,
    EcMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
