import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ContractComponent } from './contract/contract.component';
import { PermanentComponent } from './permanent/permanent.component';

@NgModule({
  declarations: [ContractComponent, PermanentComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
