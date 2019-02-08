import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// message from a shared service
import { DataService } from '../../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // parent to child
  @Input() cMessage: string;

  // child to parent
  cMessage2 = 'message from child to parent via Output, EventEmitter';

  // child to parent via viewChild, AfterViewInit
  cMessage3 = 'message from child to parent via Output, EventEmitter';

  // message from a shared service
  cMessage4 = '';

  // child to parent
  @Output() messageEvent = new EventEmitter<string>();

  // message from a shared service
  constructor(private data: DataService) { }

  ngOnInit() {
    // message from a shared service
    this.data.currentMessage.subscribe(x => this.cMessage4 = x);
  }

  // child to parent
  sendMessage() {
    this.messageEvent.emit(this.cMessage2);
  }

}
