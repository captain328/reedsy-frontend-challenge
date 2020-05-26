import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookDetailsRoutingModule } from './book-details-routing.module';
import { BookDetailsComponent } from './book-details.component';


@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookDetailsRoutingModule,
  ]
})
export class BookDetailsModule {
}
