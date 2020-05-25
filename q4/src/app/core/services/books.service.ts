import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../../environments/environment';
import { PageSizeDefault, Paginator } from '../models/paginator';
import { paginatorParam } from '../utils/paginator.util';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private httpClient: HttpClient
  ) { }

  books(skip = 0, take = PageSizeDefault): Observable<Paginator<Book>> {
    const url = `${environment.api}/books`;
    let params = paginatorParam(skip, take);
    return this.httpClient.get<Paginator<Book>>(url, { params });
  }

  bookDetail(slug: string): Observable<Book> {
    const url = `${environment.api}/books/${slug}`;
    return this.httpClient.get<Book>(url);
  }
}
