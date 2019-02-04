import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GripesAppComponent } from './gripes-app.component';
import { GripesListComponent } from './gripes/gripes-list.component';
import { GripeThumbnailComponent } from './gripes/grips-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { GripeDetailsComponent } from './gripes/gripe-details/gripe-details.component';
import { CreateGripeComponent } from './gripes/create-gripe.component';
import { Error404Component } from './errors/404.components';

import { GripesService } from './gripes/shared/gripes.service';
import { ToastrService } from './common/toastr.service';
import { GripeRouteActivator } from './gripes/gripe-details/gripe-route-activator.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    GripesAppComponent,
    GripesListComponent,
    GripeThumbnailComponent,
    GripeDetailsComponent,
    NavBarComponent,
    CreateGripeComponent,
    Error404Component,
  ],
  providers: [
    GripesService,
    ToastrService,
    GripeRouteActivator
  ],
  bootstrap: [GripesAppComponent]
})
export class AppModule { }
