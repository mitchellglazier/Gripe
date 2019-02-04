import { GripesService } from './../shared/gripes.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './gripe-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right: 20px; }
    `]
})
export class GripeDetailsComponent {
    gripe: any;

    constructor (private gripesService: GripesService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.gripe = this.gripesService.getGripe(
            +this.route.snapshot.params['id']);
    }

}
