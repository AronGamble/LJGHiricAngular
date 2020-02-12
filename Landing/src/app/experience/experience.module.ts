import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ContractComponent } from './contract/contract.component';
import { PermanentComponent } from './permanent/permanent.component';
import { EmploymentComponent } from './employment/employment.component';
import { BackComponent } from '../back/back.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ContractItemSummaryComponent } from './contract-item-summary/contract-item-summary.component';

@NgModule({
  declarations: [ContractComponent, PermanentComponent, EmploymentComponent, BackComponent, ContractItemSummaryComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    ExperienceRoutingModule
  ],
  exports: [ContractComponent, PermanentComponent, EmploymentComponent, BackComponent],
  entryComponents: []
})
export class ExperienceModule { }
