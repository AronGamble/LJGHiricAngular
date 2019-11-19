import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ContractComponent } from './contract/contract.component';
import { PermanentComponent } from './permanent/permanent.component';
import { EmploymentComponent } from './employment/employment.component';

@NgModule({
  declarations: [ContractComponent, PermanentComponent, EmploymentComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
