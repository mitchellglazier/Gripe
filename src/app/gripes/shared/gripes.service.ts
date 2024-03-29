import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IGripe, IComment } from './gripes.model';
import { visitRootRenderNodes } from '@angular/core/src/view/util';

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

    saveGripe(gripe) {
       gripe.id = 999;
       gripe.comment = [];
       GRIPES.push(gripe);
    }

    updateGripe(gripe) {
       let index = GRIPES.findIndex(x => x.id = gripe.id);
       GRIPES[index] = gripe;
    }

    searchTags(searchTerm: string) {
       let term = searchTerm.toLocaleLowerCase();
       let results: IComment[] = [];

       GRIPES.forEach(gripe => {
          let matchingTags = gripe.comment.filter(comment =>
            comment.tags.toLocaleLowerCase().indexOf(term) > -1);
         matchingTags = matchingTags.map ((comment: any) => {
            comment.gripeId = gripe.id;
            return comment;
         });
         results = results.concat(matchingTags);
       });

       let emitter = new EventEmitter(true);
       setTimeout(() => {
          emitter.emit(results);
       }, 100);
       return emitter;
    }
}

const GRIPES: IGripe[] = [
    {
   id: 1,
   name: 'Learning new frameworks sucks',
   date: new Date('02/01/2019'),
   reference: 'www.google.gom',
   body: 'Learning new languages sucks and its really slow, but what can you do?',
   comment: [
      {
         id: 1,
         name: 'Angular using TypeScript',
         date: new Date('02/01/2019'),
         reference: 'www.angular.com',
         tags: '#Angular',
         body: 'hello hello',
         voters: ['peck', 'roy', 'joe', 'ju']
      },
      {
         id: 2,
         name: 'React using JavaScript',
         date: new Date('02/01/2019'),
         tags: '#react',
         body: 'bye bye',
         voters: ['roy', 'joe', 'ju']
      },
      {
         id: 3,
         name: 'Ruby on Rails',
         date: new Date('02/01/2019'),
         reference: 'www.rails.com',
         tags: '#ruby',
         body: 'bye bye',
         voters: ['roy', 'joe', 'ju']
      }
   ]
},
{
   id: 2,
   name: 'Its impossible to cancel cable',
   date: new Date('03/15/2017'),
   reference: 'www.espn.gom',
   tags: '#comcast #angular',
   // tslint:disable-next-line:max-line-length
   body: 'I swear I have been on hold for hours and hours and hours... What am i supposed to do. I really dont think I have any opetions at this point.',
   comment: [
      {
         id: 1,
         name: 'Angular',
         date: new Date('02/01/2019'),
         reference: 'www.google/.com',
         tags: '#coding',
         body: 'hello hello',
         voters: ['peck', 'roy', 'joe', 'ju']
      }
   ]
},
{
   id: 3,
   name: 'Home food is good but bad',
   date: new Date('12/30/2018'),
   reference: 'www.yahoo.gom',
   tags: '#mitchellglazier #angular',
   body: 'You cant eat out every day but home food every day isnt great either. Balance is nice.',
   comment: [
      {
         id: 1,
         name: 'Angular',
         date: new Date('02/01/2019'),
         reference: 'www.google.com',
         tags: '#something',
         body: 'hello hello',
         voters: ['peck', 'roy']
      }
   ]
},
{
   id: 4,
   name: 'Blah blah blah',
   date: new Date('01/01/2019'),
   tags: '#facebooksucks #angry',
   body: 'Today is my bday, what a wonderful day!',
   comment: [
      {
         id: 1,
         name: 'Angular',
         date: new Date('02/01/2019'),
         reference: 'www.google/com',
         tags: '#hahaha',
         body: 'hello hello',
         voters: ['peck', 'roy', 'joe', 'ju', 'dans']
      }
   ]
},
{
   id: 5,
   name: 'Lebron should be considered the GOAT',
   date: new Date('07/24/2017'),
   reference: 'www.linkedin.gom',
   tags: '#glazierbros #mattlabrum',
   body: 'It really amazes me that no one considers Lebron the greatest of all time.',
   comment: [
      {
         id: 1,
         name: 'Angular',
         date: new Date('02/01/2019'),
         reference: 'www.google/com',
         tags: '#moneymoney',
         body: 'hello hello',
         voters: ['peck', 'roy', 'joe'],
      }
   ]
},
{
   id: 6,
   name: 'Are the Jazz the greatest NBA franchise of all time?',
   date: new Date('08/24/1988'),
   reference: 'www.indeed.gom',
   tags: '#carlos #lakers',
   body: 'Yea they probably are',
   comment: [
      {
         id: 1,
         name: 'Angular',
         date: new Date('02/01/2019'),
         reference: 'www.google/com',
         tags: '#UtahJazz',
         body: 'hello hello',
         voters: ['peck', 'roy', 'joe', 'ju', 'esus'],
      }
   ]
}];
