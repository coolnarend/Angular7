import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  userNameStatus() {
    return this.username.length === 0;
  }
  showUserName() {
    console.log(this.username);
    this.username = '';
  }
}
