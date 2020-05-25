import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'reedsy-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book = this.route.snapshot.data.book;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

}
