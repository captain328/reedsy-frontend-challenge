import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailsRoutingModule } from './book-details-routing.module';
import { BookDetailsComponent } from './book-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    BookDetailsRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookDetailsModule { }
