import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private authenticationService: AuthenticationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    }

    // navigate to login page
    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
