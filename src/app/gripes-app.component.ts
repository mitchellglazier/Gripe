import { Component } from '@angular/core';

@Component({
  selector: 'gripes-app',
  template: `
  <nav-bar></nav-bar>
  <gripes-list></gripes-list>
  `
})
export class GripesAppComponent {
  title = 'Gripe';
}
