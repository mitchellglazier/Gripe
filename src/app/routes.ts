import { Routes } from '@angular/router';
import { GripeDetailsComponent } from './gripes/gripe-details/gripe-details.component';
import { GripesListComponent } from './gripes/gripes-list.component';
import { CreateGripeComponent } from './gripes/create-gripe.component';
import { Error404Component } from './errors/404.components';
import { GripeRouteActivator } from './gripes/gripe-details/gripe-route-activator.service';

export const appRoutes: Routes = [
    { path: 'gripes/new', component: CreateGripeComponent},
    { path: 'gripes', component: GripesListComponent },
    { path: 'gripes/:id', component: GripeDetailsComponent,
        canActivate: [GripeRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/gripes', pathMatch: 'full' }
];
