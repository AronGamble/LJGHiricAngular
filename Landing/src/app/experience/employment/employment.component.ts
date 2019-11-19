import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HistoryService } from 'src/app/history.service';
import { EmploymentItem } from 'src/app/Models/employment-item';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  id: string;
  employmentItem: EmploymentItem;

  constructor(private route: ActivatedRoute, private historyService: HistoryService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.id = params.id;

      this.historyService.getEmploymentItem(params.id).subscribe((data: EmploymentItem) => {

        this.employmentItem = data;

      });



    });

  }

}
