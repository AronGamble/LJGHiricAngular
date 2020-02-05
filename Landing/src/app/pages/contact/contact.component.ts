import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Observable, of, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private _contactService: ContactService, private snackBar: MatSnackBar) { }

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

  onSubmit() {

    // TODO: Use EventEmitter with form value




    this._contactService.submitContact(this.contactForm.value).subscribe(
      () => {

        this.snackBar.open("Thankyou, we\'ll be in touch soon", null, { duration: 5000, horizontalPosition: 'right' })
        this.contactForm.reset();
      },
      () => {
        this.snackBar.open("An error has occured", null, { duration: 5000, horizontalPosition: 'right' })
      },
      () => {

      }

    );

    console.warn(this.contactForm.value);
  }

}
