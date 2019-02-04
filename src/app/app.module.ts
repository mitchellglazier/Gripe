import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  GripesListComponent,
  GripeThumbnailComponent,
  GripeDetailsComponent,
  CreateGripeComponent,
  GripesService,
  GripeRouteActivator,
  GripeListResolver,
} from './gripes/index';

import { appRoutes } from './routes';
import { GripesAppComponent } from './gripes-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.components';
import { ToastrService } from './common/toastr.service';

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
    GripeRouteActivator,
    GripeListResolver,
    {
      provide: 'canDeactivateCreateGripe',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [GripesAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateGripeComponent) {
  if (component.isDirty) {
    return window.confirm('you have not saved this gripe, do you really wanna cancel?');
  }
  return true;
}
