import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractComponent } from './contract/contract.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentResolverService } from './employment/employment-resolver.service';

const routes: Routes = [
  { path: '', component: ContractComponent },
  { path: 'employment/:id', component: EmploymentComponent, resolve: {employmentItem: EmploymentResolverService} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
