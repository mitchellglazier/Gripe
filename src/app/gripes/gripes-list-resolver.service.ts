import { GripesService } from './shared/gripes.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class GripeListResolver implements Resolve<any> {
    constructor(private gripesService: GripesService) {

    }

    resolve() {
        return this.gripesService.getGripes().pipe(map(events => events));
    }
}
