import { Component, OnInit } from '@angular/core';

import { Book } from '../core/models/book';
import { PageSizeSmall } from '../core/models/paginator';
import { BooksService } from '../core/services/books.service';
import { ToastrService } from '../core/services/toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'reedsy-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  page = this.route.snapshot.queryParams.page || 1;
  total = 0;
  take = PageSizeSmall;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private booksService: BooksService,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  pageChange(page: number) {
    this.router.navigate(['/books'], { queryParams: { page } });
    this.page = page;
    this.loadBooks();
  }

  async loadBooks() {
    try {
      this.spinner.show();
      const res = await this.booksService.books((this.page - 1) * this.take, this.take).toPromise();
      this.books = res.data;
      this.total = res.count;
    } catch (e) {
      this.toastrService.error(e, 'Failed to fetch books data.');
    } finally {
      this.spinner.hide();
    }
  }
}
