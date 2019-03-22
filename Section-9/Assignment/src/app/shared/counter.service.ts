import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activetoInactive = 0;
  inactivetoActive = 0;

  constructor() { }

  increnmentAtoI() {
    this.activetoInactive++;
    console.log('Active to Inactive- ' + this.activetoInactive);
  }

  increnmentItoA() {
    this.inactivetoActive++;
    console.log('Inactive to Active- ' + this.inactivetoActive);
  }

}
