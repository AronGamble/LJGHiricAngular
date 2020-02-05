import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    HomeModule,
    MatSnackBarModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
