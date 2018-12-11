import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID = 10;
  serverStatus = 'active';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'active' : 'inactive';
  }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'active' ? 'green' : 'red';
  }

}
