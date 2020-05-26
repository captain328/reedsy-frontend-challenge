import { ReplaySubject } from 'rxjs';

import { MOCK_BOOKS } from './mock/book.mock';

export class BooksRouteStub {
  snapshot: any;
  private dataSubject = new ReplaySubject<any>();
  readonly data = this.dataSubject.asObservable();

  constructor() {
    this.snapshot = {
      data: {
        book: MOCK_BOOKS[0]
      },
      queryParams: {
        keyword: '',
      }
    };
  }
}
