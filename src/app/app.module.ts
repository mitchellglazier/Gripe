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
import { JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

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
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  providers: [
    GripesService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
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
