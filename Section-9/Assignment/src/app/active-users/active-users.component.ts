import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userData: UsersService) {}
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  ngOnInit() {
    this.users = this.userData.activeUsers;
  }
  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userData.onSetToInactive(id);
  }
}
