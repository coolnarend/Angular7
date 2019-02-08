import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

// child to parent via viewChild, AfterViewInit
import { ChildComponent } from './child/child.component';

// message from a shared service
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  // message from a shared service
  constructor(private data: DataService) { }

  // child to parent via viewChild, AfterViewInit
  @ViewChild(ChildComponent) child;

  // parent to child
  pMessage = 'message from parent to child component via Input method';

  // child to parent
  pMessage2 = '';

  // child to parent via viewChild, AfterViewInit
  pMessage3 = '';

  // message from a shared service
  pMessage4 = '';

  ngOnInit() {
    // message from a shared service
    this.data.currentMessage.subscribe(pMessage4 => this.pMessage4 = pMessage4);
  }

  // child to parent via viewChild, AfterViewInit
  ngAfterViewInit() {
    this.pMessage3 = this.child.cMessage3;
  }

  // child to parent
  recieveMessage($event) {
    this.pMessage2 = $event;
  }
}
