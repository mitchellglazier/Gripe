import { Component } from '@angular/core';

@Component({
  selector: 'gripes-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class GripesAppComponent {
  title = 'Gripe';
}
