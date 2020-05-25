import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksRoutingModule } from './books-routing.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [BooksComponent, BookCardComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    PipesModule,
    NgxSpinnerModule,
    NgxPaginationModule,
  ]
})
export class BooksModule {
}
