import { Component, Input } from '@angular/core';
import { IComment } from '../shared/index';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html'
})
export class CommentListComponent {
    @Input() comments: IComment[];
}
