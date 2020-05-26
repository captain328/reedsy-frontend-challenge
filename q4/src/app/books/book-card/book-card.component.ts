import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../../core/models/book';

@Component({
  selector: 'reedsy-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVote() {
    // TODO: add toggle vote handler
  }

}
