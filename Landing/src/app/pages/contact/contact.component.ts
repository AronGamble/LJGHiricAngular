import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AlertComponent } from 'src/app/shared/alert.component';
import { PlaceholderDirective } from 'src/app/directives/placeholderdirective';
import { Movie } from 'src/app/models/movie';
import { map } from 'rxjs/operators';
import { eventNames } from 'process';
import { DetailDialog } from './detail-dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  // Get the element where the directive has been attached in the DOM
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  // Store a reference to the close observable on the alert component
  private closeSub: Subscription;

  constructor(
    public dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver,
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar) { }

  ////
  length = 10;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  ////

  topBuzz(event: PageEvent) {
    this.contactService.performMovieSearchPaged(this.searchForm.value, event.pageIndex + 1).subscribe(
      (data) => {
        this.results = data.Search;
      }
    )
  }

  error = false;
  results: Movie[];
  pages: number[] = [];
  movieItem: Movie;
  hideNoResults: boolean = false;

  searchForm = this.fb.group({
    name: ['', Validators.required],
    page: ['']

  });

  get name() { return this.searchForm.get('name'); }
  get page() { return this.searchForm.get('page'); }


  ngOnInit() {
  }

  ngOnDestroy() {

    // we don't need to keep the subscription open so close it if there is one
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }

  }

  onHandleError() {

    this.error = false;

  }


  private showErrorAlert(message: string) {

    // Create a factory for the Alert Component
    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    // Get the directive from the DOM container to attach the modal element to
    const hostViewContainerRef = this.alertHost.viewContainerRef;

    // Get rid of anything that already might be rendered in the DOM container
    hostViewContainerRef.clear();

    // Create and store a reference to  the alert component
    const al = hostViewContainerRef.createComponent(factory);

    // Set the message to what was passed in
    al.instance.message = message;

    // Subscribe to the close observable and clear the modal when it fires
    this.closeSub = al.instance.close.subscribe(() => {
      hostViewContainerRef.clear();
    });

  }

  showPager(): boolean {

    if (this.results != undefined && this.results.length > 0) {

      return true;
    }
    else {
      return false;
    }
  }

  openDialog(id: string): void {

    this.contactService.getMovieItem(id).subscribe(
      (movieItem) => {

        const dialogRef = this.dialog.open(DetailDialog, {
          width: '500px',
          data: { mItem: movieItem }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });

      }
    )

  }



  openedPanel(id: string) {

    this.contactService.getMovieItem(id).subscribe(
      (data) => {
        this.movieItem = data;
      }
    )
  }


  refreshPage() {

    // *** The error flag would display the ngIf declarative approach modal
    this.error = false;

    this.contactService.performMovieSearch(this.searchForm.value).subscribe(
      (data) => {

        this.error = false;
        this.results = data.Search;
        this.pages = [];

        let noOfPages = 0;

        // If there has been a movie(s) found
        if (data.Response == "True") {

          this.length = data.totalResults;
          
          this.hideNoResults = false;

          if (this.results.length > 0) {
            noOfPages = Math.round(data.totalResults / 10);
          }

          if (noOfPages > 0) {
            for (let x = 1; x < noOfPages + 1; x++) {
              this.pages.push(x);
            }
          }


          if (this.page.value > 0) {
            this.snackBar.open('Showing page ' + this.page.value + ' of ' + noOfPages, null, { duration: 5000, horizontalPosition: 'right' });
          }
        }
        else {

          // No movies found
          this.searchForm.controls["page"].reset();
          this.pages = [];
          this.hideNoResults = true;
          this.snackBar.open('No Movies Found!!', null, { duration: 5000, horizontalPosition: 'right' });

        }
      },
      () => {

        // *** This method shows the directive component loader approach
        this.showErrorAlert('An error has occured');

        this.error = true;
      },
      () => {
      }
    );

  }

  onSubmit() {

    // New search so clear the previous search page data
    this.searchForm.controls["page"].reset();
    this.pages = [];
    this.refreshPage();

  }
}
