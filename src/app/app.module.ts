import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GripesAppComponent } from './gripes-app.component';
import { GripesListComponent } from './gripes/gripes-list.component';
import { GripeThumbnailComponent } from './gripes/grips-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';

import { GripesService } from './gripes/shared/gripes.service';
import { ToastrService } from './common/toastr.service';



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
  providers: [
    GripesService,
    ToastrService
  ],
  bootstrap: [GripesAppComponent]
})
export class AppModule { }
