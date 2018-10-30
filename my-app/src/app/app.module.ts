import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Com1Component } from './com1/com1.component';
import { FormsModule } from '@angular/forms';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';

@NgModule({
  declarations: [
    AppComponent,
    // Com1Component,
    Com2Component,
    Com3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
