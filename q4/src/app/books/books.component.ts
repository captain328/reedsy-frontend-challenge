import { Component, OnInit } from '@angular/core';

import { Book } from '../core/models/book';
import { PageSizeDefault } from '../core/models/paginator';
import { BooksService } from '../core/services/books.service';

@Component({
  selector: 'reedsy-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  total = 0;
  skip = 0;
  take = PageSizeDefault;

  isLoading = false;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  async loadBooks() {
    try {
      this.isLoading = true;
      const res = await this.booksService.books(this.skip, this.take).toPromise();
      this.books = res.data;
      this.total = res.count;
    } catch (e) {
      // TODO: show error toast
    } finally {
      this.isLoading = false;
    }
  }
}
