import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history/history.service';
import { EmploymentItem } from 'src/app/Models/employment-item';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  historyItems: EmploymentItem[];
  panelOpenState: boolean;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {

    this.historyService.getHistory().subscribe((data) => {
      this.historyItems = data;
    },
      err => {
        alert(err);
      },
      () => {}
    );

  }

}
