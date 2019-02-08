import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  model = new Book(1, 'Title', 'Author', 'http://');

  constructor() { }

  ngOnInit() {
  }

  get currentBook() { return JSON.stringify(this.model); }
  // get currentBook() { return this.model }

}
