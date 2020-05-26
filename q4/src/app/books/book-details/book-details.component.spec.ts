import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { BookDetailsComponent } from './book-details.component';
import { BooksRouteStub } from '../../testing/books-route-stub';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let activatedRoute;
  let book;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useClass: BooksRouteStub },
        FormBuilder,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    book = activatedRoute.snapshot.data.book;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleVote() should toggle book vote state', () => {
    const oldValue = book.upvoted;
    component.toggleVote();
    component.toggleVote();
    expect(book.upvoted).toBe(oldValue);
  });

  it('#addComment() should add a comment to book object', () => {
    const $event = { preventDefault: () => {} };
    const oldCommentCount = book.comments.length;
    component.addComment($event);
    expect(book.comments.length).toBe(oldCommentCount + 1);
  });
});
