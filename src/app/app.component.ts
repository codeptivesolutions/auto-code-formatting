import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auto-code-formatting';

  constructor() {
    console.log('--- title :: ', this.title);
  }
}
