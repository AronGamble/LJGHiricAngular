import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AlertComponent } from 'src/app/shared/alert.component';
import { PlaceholderDirective } from 'src/app/directives/placeholderdirective';

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
    private componentFactoryResolver: ComponentFactoryResolver,
    private fb: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar) { }

  error = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    comments: ['', Validators.required]
  });

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get comments() { return this.contactForm.get('comments'); }

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

  onSubmit() {

    // *** The error flag would display the ngIf declarative approach modal
    this.error = true;

    this.contactService.submitContact(this.contactForm.value).subscribe(
      () => {
        this.error = false;

        this.snackBar.open('Thankyou, we\'ll be in touch soon', null, { duration: 5000, horizontalPosition: 'right' });
        this.contactForm.reset();
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

}
