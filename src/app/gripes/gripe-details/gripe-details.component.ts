import { GripesService } from './../shared/gripes.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IGripe, IComment } from '../shared/index';
import { CommentStmt } from '@angular/compiler';

@Component({
    templateUrl: './gripe-details.component.html',
    styles: [`
        .container { padding-left:20px; padding-right: 20px; }
        a { cursor:pointer }
    `]
})
export class GripeDetailsComponent {
    gripe: IGripe;
    addMode: boolean;

    constructor (private gripesService: GripesService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.gripe = this.gripesService.getGripe(+params['id']);
            this.addMode = false;
        });
    }

    addComment() {
        this.addMode = true;
    }

    saveNewComment(comment: IComment) {
        const nextId = Math.max.apply(null, this.gripe.comment.map( c => c.id));
        comment.id = nextId + 1;
        this.gripe.comment.push(comment);
        this.gripesService.updateGripe(this.gripe);
        this.addMode = false;
    }

    cancelAddComment() {
        this.addMode = false;
    }

}
