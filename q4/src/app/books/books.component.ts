import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Book } from '../core/models/book';
import { PageSizeSmall } from '../core/models/paginator';
import { BooksService } from '../core/services/books.service';
import { ToastrService } from '../core/services/toastr.service';

@Component({
  selector: 'reedsy-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  page = this.route.snapshot.queryParams.page || 1;
  keyword = this.route.snapshot.queryParams.keyword || '';
  total = 0;
  take = PageSizeSmall;

  searchForm = this.fb.group({
    keyword: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private booksService: BooksService,
    private toastrService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  pageChange(page: number) {
    const queryParams = this.keyword === '' ? { page } : { page, keyword: this.keyword };
    this.router.navigate(['/books'], { queryParams });
    this.page = page;
    this.loadBooks();
  }

  searchBooks($event) {
    $event.preventDefault();
    this.keyword = this.searchForm.value.keyword;
    this.router.navigate(['/books'], { queryParams: { page: 1, keyword: this.keyword } });
    this.page = 1;
    this.loadBooks();
  }

  async loadBooks() {
    try {
      this.spinner.show();
      const res = await this.booksService.books(this.keyword, (this.page - 1) * this.take, this.take).toPromise();
      this.books = res.data;
      this.total = res.count;
    } catch (e) {
      this.toastrService.error(e, 'Failed to fetch books data.');
    } finally {
      this.spinner.hide();
    }
  }
}
