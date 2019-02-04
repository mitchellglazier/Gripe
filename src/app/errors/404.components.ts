import { Component } from '@angular/core';

@Component({
  template: `
    <h2 class="errorMessage">Feel free to gripe about not being able to gripe here, you've reached this page in error!</h2>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 40px;
      text-align: center;
    }`]
})
export class Error404Component {
  constructor() {

  }

}
