import { Component, Input } from '@angular/core';
// import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    // private logService: LoggingService,
    private accountService: AccountsService
  ) {}


  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.logService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
