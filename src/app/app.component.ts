import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CU Cinemas';
  state = 'hidden';

  toggleState() {
    this.state = this.state === 'hidden' ? 'block' : 'hidden';
  }
}
