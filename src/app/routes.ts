import { Routes } from '@angular/router';
import {
    GripesListComponent,
    GripeDetailsComponent,
    CreateGripeComponent,
    GripeRouteActivator,
    GripeListResolver,
    CreateCommentComponent,
} from './gripes/index'

import { Error404Component } from './errors/404.components';


export const appRoutes: Routes = [
    { path: 'gripes/new', component: CreateGripeComponent,
        canDeactivate: ['canDeactivateCreateGripe'] },
    { path: 'gripes', component: GripesListComponent,
        resolve: {gripes: GripeListResolver} },
    { path: 'gripes/:id', component: GripeDetailsComponent,
        canActivate: [GripeRouteActivator] },
    { path: 'gripes/comment/new', component: CreateCommentComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/gripes', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
];
