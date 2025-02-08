import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';

  // Prepare an event handler for showing alert box with message Hello World!
  onLogoClicked() {
    alert('Hello World!');
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }
}
