import { ActivatedRoute } from '@angular/router';
import { ToastrService } from './../common/toastr.service';
import { Component, OnInit } from '@angular/core';
import { GripesService } from './shared/gripes.service';

declare let toastr;

@Component({
  template: `
    <div>
        <h1>What Do You Want To Gripe About?</h1>
        <hr />
        <div class="row">
            <div *ngFor="let gripe of gripes" class="col-md-5">
                <gripe-thumbnail (click)="handleThumbnailClick(gripe.name)" [gripe]
                ="gripe"></gripe-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class GripesListComponent implements OnInit {
    gripes: any[];

    constructor(private gripesService: GripesService, private toastr: ToastrService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.gripes = this.route.snapshot.data['gripes'];
    }

    handleThumbnailClick(gripeName) {
        this.toastr.success(gripeName);
    }
}
