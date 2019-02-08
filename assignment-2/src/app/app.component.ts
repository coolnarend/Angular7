import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewPassword = false;
  viewCount = [];

  onChange() {
    this.viewPassword = !this.viewPassword;
    this.viewCount.push(this.viewCount.length + 1);
  }
}
