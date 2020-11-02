import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatSnackBarModule, } from '@angular/material/snack-bar';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { AlertComponent } from '../shared/alert.component';
import { DetailDialog } from './contact/detail-dialog';


@NgModule({
  declarations: [DetailDialog],
  imports: [
    CommonModule,
    HomeModule,
    MatSnackBarModule,
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    SharedModule,
    MatDialogModule
  ],
  entryComponents: [AlertComponent, DetailDialog]
})
export class PagesModule { }