import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholderdirective';

@NgModule({
  declarations: [PlaceholderDirective],
  imports: [
    CommonModule
  ],
  exports: [PlaceholderDirective]
})
export class DirectivesModule { }
