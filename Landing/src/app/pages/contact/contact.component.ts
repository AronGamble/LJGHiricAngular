import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitMessage = '';

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    comments: ['', Validators.required]
  });


  constructor(private fb: FormBuilder, private _contactService: ContactService) { }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get comments() { return this.contactForm.get('comments'); }

  ngOnInit() {
  }

  onSubmit() {

    // TODO: Use EventEmitter with form value

    this._contactService.submitContact(this.contactForm.value).subscribe(
      res => {
        this.submitMessage = 'Thankyou, we\'ll be in touch';
        this.contactForm.reset();
      },
      err => {
        this.submitMessage = 'An error has occurred, please try again';
      },
      () => {

      }

    );

    console.warn(this.contactForm.value);
  }

}
