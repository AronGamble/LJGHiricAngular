import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ContractComponent } from './contract/contract.component';
import { PermanentComponent } from './permanent/permanent.component';
import { EmploymentComponent } from './employment/employment.component';
import { BackComponent } from '../back/back.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ContractComponent, PermanentComponent, EmploymentComponent, BackComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    ExperienceRoutingModule
  ],
  exports: [ContractComponent, PermanentComponent, EmploymentComponent, BackComponent]
})
export class ExperienceModule { }
