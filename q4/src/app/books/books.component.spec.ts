import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipesModule } from '../shared/pipes/pipes.module';
import { BooksComponent } from './books.component';
import { BooksRouteStub } from '../testing/books-route-stub';
import { BooksService } from '../core/services/books.service';
import { asyncData } from '../testing/async-observable-helpers';
import { MOCK_BOOKS } from '../testing/mock/book.mock';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const booksServiceSpy = jasmine.createSpyObj('BooksService', ['books']);
  const toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        PipesModule,
      ],
      providers: [
        { provide: ActivatedRoute, useClass: BooksRouteStub },
        { provide: BooksService, useValue: booksServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    booksServiceSpy.books.and.returnValue(asyncData({ count: MOCK_BOOKS.length, data: MOCK_BOOKS }));
    toastrServiceSpy.error.and.returnValue(new Promise<boolean>(resolve => resolve(true)));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#pageChange should make router navigation with page param', () => {
    component.pageChange(1);
    const queryParams = { page: 1, keyword: component.keyword };
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/books'], { queryParams });
  });

  it('#pageChange should make router navigation with page and keyword params when keyword is already set', () => {
    component.keyword = 'test';
    component.pageChange(1);
    const queryParams = { page: 1, keyword: component.keyword };
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/books'], { queryParams });
  });

  it('#searchBooks should make router navigation with keyword param', () => {
    const $event = {
      preventDefault: () => {
      }
    };
    component.searchBooks($event);
    const queryParams = { page: 1, keyword: component.searchForm.value.keyword };
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/books'], { queryParams });
  });

  it('#loadBooks should show toastr when fetching books failed', () => {
    booksServiceSpy.books.and.throwError('fetch failed');
    component.loadBooks();
    expect(toastrServiceSpy.error).toHaveBeenCalled();
  });
});
