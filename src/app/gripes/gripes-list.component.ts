import { Component } from '@angular/core';

@Component({
  selector: 'gripes-list',
  template: `
    <div>
        <h1>What Do You Want To Gripe About?</h1>
        <hr />
        <gripe-thumbnail [gripe]="gripe1"></gripe-thumbnail>
    </div>
  `
})
export class GripesListComponent {
    gripe1 = {
        id: 1,
        name: 'Learning new languages sucks',
        date: '02/01/2019',
        body: 'Learing new languages sucks and its really slow, but what can you do?'
    };
}
