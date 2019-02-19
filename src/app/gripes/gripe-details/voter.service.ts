import { IComment } from '../shared/gripes.model';
import { Injectable } from '@angular/core';

@Injectable()
export class VoterService {

    deleteVoter(comment: IComment, voterName: string) {
        comment.voters = comment.voters.filter(voter => voter !==
            voterName);
    }

    addVoter(comment: IComment, voterName: string) {
        comment.voters.push(voterName);
    }

    userHasVoted(comment: IComment, voterName: string) {
        return comment.voters.some(voter => voter === voterName);
    }
}
