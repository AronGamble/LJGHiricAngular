import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history/history.service';
import { EmploymentItem } from 'src/app/Models/employment-item';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  id: string;
  employmentItem: EmploymentItem;

  constructor(private route: ActivatedRoute, private historyService: HistoryService, private router: Router) {
  }

  backToContracts(e: Event) {

    this.router.navigate(['/']);

  }

  ngOnInit() {

    document.body.classList.add('bg-account-pages');
    document.body.classList.add('py-4');
    document.body.classList.add('py-sm-0');

    this.route.data.subscribe(
      (data: Data) => {
        this.employmentItem = data['employmentItem'];
      }
    )

  }

}
