import { Routes } from '@angular/router';
import { GripeDetailsComponent } from './gripes/gripe-details/gripe-details.component';
import { GripesListComponent } from './gripes/gripes-list.component';
import { CreateGripeComponent } from './gripes/create-gripe.component';

export const appRoutes: Routes = [
    { path: 'gripes/new', component: CreateGripeComponent},
    { path: 'gripes', component: GripesListComponent },
    { path: 'gripes/:id', component: GripeDetailsComponent },
    { path: '', redirectTo: '/gripes', pathMatch: 'full' }
];
