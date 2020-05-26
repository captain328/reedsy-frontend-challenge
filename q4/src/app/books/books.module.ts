import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';

import { BooksComponent } from './books.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksRoutingModule } from './books-routing.module';
import { PipesModule } from '../shared/pipes/pipes.module';


@NgModule({
  declarations: [BooksComponent, BookCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    BooksRoutingModule,
    PipesModule,
  ]
})
export class BooksModule {
}
