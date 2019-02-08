import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sharedMessage = new BehaviorSubject<string>('Message from a shared Service');
  currentMessage = this.sharedMessage.asObservable();

  constructor() { }

  changeMessage(xyz: string) {
    this.sharedMessage.next(xyz);
  }
}
