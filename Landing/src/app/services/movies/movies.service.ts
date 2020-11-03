import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ContactItem } from 'src/app/Models/contact-item';
import { environment } from '../../../environments/environment';
import { Movie } from 'src/app/models/movie';
import { SearchResult } from 'src/app/models/search-result';
import { SearchItem } from 'src/app/models/search-item';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private MOVIE_API_URL = environment.MOVIE_URL + environment.MOVIE_API_KEY;

  constructor(private http: HttpClient) { }

  performMovieSearch(searchItem: SearchItem) {

    return this.http.get<any>(this.MOVIE_API_URL + '&s=' + searchItem.name + "&page=" + searchItem.page);

  }

  performMovieSearchPaged(searchItem: SearchItem, pageIndex: number) {

    return this.http.get<any>(this.MOVIE_API_URL + '&s=' + searchItem.name + "&page=" + pageIndex);

  }

  getMovieItem(id: string): Observable<Movie> {

    return this.http.get<Movie>(this.MOVIE_API_URL + '&i=' + id + "&plot=full").pipe(
      map(res => {
        return new Movie(
          res.Title,
          res.Year,
          res.Type,
          res.imdbID,
          res.Rated,
          res.Released,
          res.Genre,
          res.Plot,
          res.Director
        );
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
