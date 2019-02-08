import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GripesService } from './shared/index';

@Component({
    templateUrl: 'create-gripe.component.html',
    styles: [`
    em { float:right; color: #E05C65; padding-left: 10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateGripeComponent {
    newGripe
    isDirty:boolean = true;
    constructor(private router: Router,
        private gripesService: GripesService) {

    }

    saveGripe(formValues) {
        this.gripesService.saveGripe(formValues);
        this.isDirty = false;
        this.router.navigate(['/gripes']);
    }

    cancel() {
        this.router.navigate(['/gripes']);
    }
}
