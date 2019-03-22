import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userData: UsersService) {}

  ngOnInit() {
    this.users = this.userData.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userData.onSetToActive(id);

  }
}
