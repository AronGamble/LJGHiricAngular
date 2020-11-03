import { Injectable } from '@angular/core';
import { EmploymentItem } from 'src/app/Models/employment-item';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService implements Resolve<Movie>{

  constructor(private moviesService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Movie> | Promise<Movie> | Movie {

    return this.moviesService.getMovieItem(route.params.id);

  }

}
