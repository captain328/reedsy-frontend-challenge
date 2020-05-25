import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsComponent } from './book-details.component';
import { BookBySlugResolver } from '../../core/resolvers/book-by-slug.resolver';


const routes: Routes = [
  {
    path: '', component: BookDetailsComponent, resolve: { book: BookBySlugResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailsRoutingModule { }
