import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router,
              // tslint:disable-next-line: variable-name
              private _route: ActivatedRoute,
              private fb: FormBuilder,
              private authService: AuthenticationService) { }

  submitMessage = '';

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {

    this.authService.login(this.username.value, this.password.value).subscribe(
      data => {

        this._route.queryParams.subscribe(params => {
          this._router.navigate([params.returnUrl]);
        });
      },
      () => {
        this.submitMessage = 'An error has occurred, please try again';
      },
      () => {
      }
    );

    console.warn(this.loginForm.value);
  }

  ngOnInit() {

    document.body.classList.add('bg-account-pages');
    document.body.classList.add('py-4');
    document.body.classList.add('py-sm-0');

  }

}
