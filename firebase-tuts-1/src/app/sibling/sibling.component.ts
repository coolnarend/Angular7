import { Component, OnInit } from '@angular/core';
// message from a shared service
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  // message from a shared service
  constructor(private data: DataService) { }

  // message from a shared service
  sMessage = '';

  ngOnInit() {
    // message from a shared service
    this.data.currentMessage.subscribe(x => this.sMessage = x);
  }

  newMessage() {
    this.data.changeMessage('Shared message changed from sibling component');
  }

}
