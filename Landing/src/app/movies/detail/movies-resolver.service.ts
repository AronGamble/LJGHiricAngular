import { Injectable } from '@angular/core';
import { EmploymentItem } from 'src/app/Models/employment-item';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact/contact.service';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<Movie>{

  constructor(private contactService: ContactService) { }


  resolve(route: ActivatedRouteSnapshot ): Observable<Movie> | Promise<Movie> | Movie {

    return this.contactService.getMovieItem(route.params.id);

  }

}
