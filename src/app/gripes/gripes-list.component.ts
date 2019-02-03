import { Component } from '@angular/core';

@Component({
  selector: 'gripes-list',
  template: `
    <div>
        <h1>What Do You Want To Gripe About?</h1>
        <hr />
        <div class="row">
            <div *ngFor="let gripe of gripes" class="col-md-5">
                <gripe-thumbnail [gripe]="gripe"></gripe-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class GripesListComponent {
    gripes = [
         {
        id: 1,
        name: 'Learning new languages sucks',
        date: '02/01/2019',
        reference: 'www.google.gom',
        tags: '#coding #angular',
        body: 'Learning new languages sucks and its really slow, but what can you do?'
    },
    {
        id: 2,
        name: 'Its impossible to cancel cable',
        date: '01/01/2019',
        reference: 'www.espn.gom',
        tags: '#comcast #angular',
        body: 'I swear I have been on hold for hours and hours and hours... What am i supposed to do. I really dont think I have any opetions at this point.'
    },
    {
        id: 3,
        name: 'Home food is good but bad',
        date: '12/15/2018',
        reference: 'www.yahoo.gom',
        tags: '#mitchellglazier #angular',
        body: 'You cant eat out every day but home food every day isnt great either. Balance is nice.'
    },
    {
        id: 4,
        name: 'Blah blah blah',
        date: '08/24/1988',
        reference: 'www.facebook.gom',
        tags: '#facebooksucks #angry',
        body: 'Today is my bday, what a wonderful day!'
    },
    {
        id: 5,
        name: 'Lebron should be considered the GOAT',
        date: '12/15/2018',
        reference: 'www.linkedin.gom',
        tags: '#glazierbros #mattlabrum',
        body: 'It really amazes me that no one considers Lebron the greatest of all time.'
    },
    {
        id: 6,
        name: 'Are the Lakers the greatest NBA franchise of all time?',
        date: '12/15/2018',
        reference: 'www.indeed.gom',
        tags: '#carlos #lakers',
        body: 'Yea they probably are'
    }];
}
