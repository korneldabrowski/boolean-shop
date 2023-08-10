import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordLimitPipe } from './word-limit.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [WordLimitPipe, FilterPipe],
  imports: [CommonModule],
  exports: [WordLimitPipe, FilterPipe],
})
export class PipesModule {}
