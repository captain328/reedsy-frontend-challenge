import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class BookBySlugResolver implements Resolve<Book> {

  constructor(
    private toastr: ToastrService,
    private booksService: BooksService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> | Promise<Book> | Book {
    return this.booksService.bookDetail(route.params.slug).pipe(
      catchError(e => {
        this.toastr.error('Error', 'Failed to load book detail.');
        return throwError(e);
      })
    );
  }
}
