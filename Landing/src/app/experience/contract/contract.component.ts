import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../history.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  historyItems: any;

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
