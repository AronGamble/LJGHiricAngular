import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Movie } from 'src/app/models/movie';

@Component({
    selector: 'detail-dialog',
    templateUrl: 'detail-dialog.html',
  })
  export class DetailDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DetailDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
    
  }