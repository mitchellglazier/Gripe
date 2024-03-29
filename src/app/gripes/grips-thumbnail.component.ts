import { Component, Input } from '@angular/core';
import { IGripe } from './shared/index';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'gripe-thumbnail',
    template: `
    <div [routerLink]="['/gripes', gripe.id]" class="well hoverwell thumbnail">
        <h2>{{gripe.name | uppercase}}</h2>
        <div>Date: {{gripe.date | date:'short'}}</div>
        <span>&nbsp;</span>
        <div *ngIf="gripe.reference">
            <div>Reference: {{gripe.reference}}</div>
        </div>
        <div *ngIf="gripe.tags">
            <div>Tags: {{gripe.tags}}</div>
        </div>
        <span>&nbsp;</span>
        <div>{{gripe.body}}</div>
    `,
    styles: [`
        .well div { color: #bbb; }
        .thumbnail {
            min-height: 290px;
            max-height: 290px;
        }
    `]
})
export class GripeThumbnailComponent {
    @Input() gripe: IGripe;

}
