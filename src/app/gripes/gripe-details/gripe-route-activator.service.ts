import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { GripesService } from '../shared/gripes.service';

@Injectable()
export class GripeRouteActivator implements CanActivate {
    constructor(private gripesService: GripesService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const gripeExists = !!this.gripesService.getGripe(+route.params['id']);

        if (!gripeExists) {
            this.router.navigate(['/404']);
        }
        return gripeExists;
    }
}
