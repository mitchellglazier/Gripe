import { AuthService } from './user/auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  GripesListComponent,
  GripeThumbnailComponent,
  GripeDetailsComponent,
  CreateGripeComponent,
  GripesService,
  GripeRouteActivator,
  GripeListResolver,
  CreateCommentComponent,
  CommentListComponent,
} from './gripes/index';

import { appRoutes } from './routes';
import { GripesAppComponent } from './gripes-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.components';
import { ToastrService } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/callapsible-well.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    CreateCommentComponent,
    CommentListComponent,
    CollapsibleWellComponent,
  ],
  providers: [
    GripesService,
    ToastrService,
    GripeRouteActivator,
    GripeListResolver,
    AuthService,
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
