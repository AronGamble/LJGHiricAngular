import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
import { AlertComponent } from '../shared/alert.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    MatSnackBarModule,
    SharedModule
  ],
  entryComponents: [AlertComponent]
})
export class PagesModule { }
