import { Component, Input } from '@angular/core';

@Component({
    selector: 'gripe-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{gripe.name}}</h2>
        <div>Date: {{gripe.date}}</div>
        <span>&nbsp;</span>
        <div>{{gripe.body}}</div>
    `,
    styles: [`
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
    `]
})
export class GripeThumbnailComponent {
    @Input() gripe:any;

}
