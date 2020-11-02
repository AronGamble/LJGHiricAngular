import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: string;
  movieItem: Movie;

  constructor(private route: ActivatedRoute, private historyService: ContactService, private router: Router) {
  }

  ngOnInit() {

    this.route.data.subscribe(
      (data: Data) => {
        this.movieItem = data['movieItem'];
      }
    )
  }

}
