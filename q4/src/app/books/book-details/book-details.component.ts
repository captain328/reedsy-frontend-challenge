import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../core/models/book';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reedsy-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book = this.route.snapshot.data.book;

  commentForm = this.fb.group({
    comment: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  toggleVote() {
    // TODO: add toggle vote handler
  }

  addComment($event) {
    $event.preventDefault();
    const content = this.commentForm.value.comment;
    this.commentForm.reset();
    const bookComment = { date: new Date(), content };
    this.book.comments.push(bookComment);
  }
}
