import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ContractComponent } from './contract/contract.component';
import { PermanentComponent } from './permanent/permanent.component';
import { EmploymentComponent } from './employment/employment.component';
import { BackComponent } from '../back/back.component';

@NgModule({
  declarations: [ContractComponent, PermanentComponent, EmploymentComponent, BackComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ],
  exports: [ContractComponent, PermanentComponent, EmploymentComponent, BackComponent]
})
export class ExperienceModule { }
