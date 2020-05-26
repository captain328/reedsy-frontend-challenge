import { TestBed } from '@angular/core/testing';
import { HttpParams } from '@angular/common/http';

import { BooksService } from './books.service';
import { environment } from '../../../environments/environment';
import { asyncData } from '../../testing/async-observable-helpers';

describe('BooksService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BooksService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#books should call httpClient get method with given params', async () => {
    const url = `${environment.api}/books`;
    httpClientSpy.get.and.returnValue(asyncData({ count: 0, data: [] }));
    let params = new HttpParams();
    params = params.append('skip', '0');
    params = params.append('take', '10');
    params = params.append('keyword', 'keyword');
    await service.books('keyword').toPromise();
    expect(httpClientSpy.get).toHaveBeenCalledWith(url, { params });
  });

  it('#bookDetail should call httpClient get method with given slug in the request url', async () => {
    const testSlug = 'test-slug';
    const url = `${environment.api}/books/${testSlug}`;
    httpClientSpy.get.and.returnValue(asyncData({}));
    await service.bookDetail(testSlug).toPromise();
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });
});
