import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IComment, restrictedWords } from '../shared/index';

@Component({
    selector: 'create-comment',
    templateUrl: './create-comment.component.html',
    styles: [`
    em { float:right; color: #E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]

})
export class CreateCommentComponent implements OnInit {
    @Output() saveNewComment = new EventEmitter();
    @Output() cancelAddComment  = new EventEmitter();

    newCommentForm: FormGroup;
    name: FormControl;
    date: FormControl;
    reference: FormControl;
    tags: FormControl;
    body: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.date = new FormControl('', Validators.required);
        this.reference = new FormControl('');
        this.tags = new FormControl('');
        this.body = new FormControl('', [Validators.required,
        Validators.maxLength(400), restrictedWords(['foo', 'bar'])
        ]);

        this.newCommentForm = new FormGroup({
            name: this.name,
            date: this.date,
            reference: this.reference,
            tags: this.tags,
            body: this.body,
        })
    }
    saveComment(formValues) {
        let comment: IComment = {
            id: undefined,
            name: formValues.name,
            date: formValues.date,
            reference: formValues.reference,
            tags: formValues.tags,
            body: formValues.body,
            voters: [],
        };
        this.saveNewComment.emit(comment);
    }

    cancel() {
        this.cancelAddComment.emit();
    }

}
