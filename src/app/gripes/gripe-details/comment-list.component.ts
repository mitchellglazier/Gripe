import { VoterService } from './voter.service';
import { AuthService } from './../../user/auth.service';
import { Component, Input, OnChanges } from '@angular/core';
import { IComment } from '../shared/index';

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    styles: ['collapsible-well h6 {margin-top: -5px margin-bottom: 10px }'],
})

export class CommentListComponent {
    @Input() comments: IComment[];

    constructor(private auth: AuthService, private voterService: VoterService) {

    }

    NgOnChanges() {

    }

    toggleVote(comment: IComment) {
        if (this.userHasVoted(comment)) {
            this.voterService.deleteVoter(comment,
                 this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(comment,
                this.auth.currentUser.userName);
     }
    }

    userHasVoted(comment: IComment) {
        return this.voterService.userHasVoted(comment,
            this.auth.currentUser.userName);
    }
}
