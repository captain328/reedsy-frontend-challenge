import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardComponent } from './book-card.component';
import { TruncateTextPipe } from '../../shared/pipes/truncate-text.pipe';
import { MOCK_BOOKS } from '../../testing/mock/book.mock';

describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<BookCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCardComponent, TruncateTextPipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardComponent);
    component = fixture.componentInstance;
    component.book = MOCK_BOOKS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleVote should toggle book vote state', () => {
    const oldVoteState = component.book.upvoted;
    component.toggleVote();
    component.toggleVote();
    expect(component.book.upvoted).toBe(oldVoteState);
  });
});
