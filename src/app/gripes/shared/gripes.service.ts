import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IGripe } from './gripes.model';

@Injectable()
export class GripesService {
    getGripes(): Observable<IGripe[]> {
       let subject = new Subject<IGripe[]>();
       setTimeout(() => {subject.next(GRIPES); subject.complete(); }, 100);
        return subject;
    }
    getGripe(id: number): IGripe {
      return GRIPES.find(gripe => gripe.id === id);
    }
}

const GRIPES: IGripe[] = [
    {
   id: 1,
   name: 'Learning new languages sucks',
   date: new Date('02/01/2019'),
   reference: 'www.google.gom',
   body: 'Learning new languages sucks and its really slow, but what can you do?'
},
{
   id: 2,
   name: 'Its impossible to cancel cable',
   date: new Date('03/15/2017'),
   reference: 'www.espn.gom',
   tags: '#comcast #angular',
   // tslint:disable-next-line:max-line-length
   body: 'I swear I have been on hold for hours and hours and hours... What am i supposed to do. I really dont think I have any opetions at this point.'
},
{
   id: 3,
   name: 'Home food is good but bad',
   date: new Date('12/30/2018'),
   reference: 'www.yahoo.gom',
   tags: '#mitchellglazier #angular',
   body: 'You cant eat out every day but home food every day isnt great either. Balance is nice.'
},
{
   id: 4,
   name: 'Blah blah blah',
   date: new Date('01/01/2019'),
   tags: '#facebooksucks #angry',
   body: 'Today is my bday, what a wonderful day!'
},
{
   id: 5,
   name: 'Lebron should be considered the GOAT',
   date: new Date('07/24/2017'),
   reference: 'www.linkedin.gom',
   tags: '#glazierbros #mattlabrum',
   body: 'It really amazes me that no one considers Lebron the greatest of all time.'
},
{
   id: 6,
   name: 'Are the Jazz the greatest NBA franchise of all time?',
   date: new Date('08/24/1988'),
   reference: 'www.indeed.gom',
   tags: '#carlos #lakers',
   body: 'Yea they probably are'
}];
