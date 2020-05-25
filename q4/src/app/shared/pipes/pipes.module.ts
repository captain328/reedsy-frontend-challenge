import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateTextPipe } from './truncate-text.pipe';



@NgModule({
  declarations: [TruncateTextPipe],
  exports: [
    TruncateTextPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
