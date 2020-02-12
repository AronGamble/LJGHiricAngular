import { Component, OnInit, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { EmploymentItem } from 'src/app/Models/employment-item';

@Component({
  selector: 'app-contract-item-summary',
  templateUrl: './contract-item-summary.component.html',
  styleUrls: ['./contract-item-summary.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ContractItemSummaryComponent implements OnInit {

  @Input() item: EmploymentItem;

  constructor() { }

  ngOnInit() {
  }

}
