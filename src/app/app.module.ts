import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GripesAppComponent } from './gripes-app.component';
import { GripesListComponent } from './gripes/gripes-list.component';
import { GripeThumbnailComponent } from './gripes/grips-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';



@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    GripesAppComponent,
    GripesListComponent,
    GripeThumbnailComponent,
    NavBarComponent
  ],
  bootstrap: [GripesAppComponent]
})
export class AppModule { }
