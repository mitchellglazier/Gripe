import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GripeAppComponent } from './gripe-app.component';

@NgModule({
  declarations: [
    GripeAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GripeAppComponent]
})
export class AppModule { }
