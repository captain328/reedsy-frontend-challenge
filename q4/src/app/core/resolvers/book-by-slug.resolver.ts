import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from '../models/book';
import { BooksService } from '../services/books.service';
import { ToastrService } from '../services/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class BookBySlugResolver implements Resolve<Book> {

  constructor(
    private booksService: BooksService,
    private toastr: ToastrService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> | Promise<Book> | Book {
    return this.booksService.bookDetail(route.params.slug).pipe(
      catchError(e => {
        this.toastr.error(e, 'Sorry, failed to load book detail.');
        return throwError(e);
      })
    );
  }
}
