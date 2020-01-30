import { Injectable } from '@angular/core';
import { EmploymentItem } from 'src/app/Models/employment-item';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HistoryService } from 'src/app/services/history/history.service';

@Injectable({
  providedIn: 'root'
})
export class EmploymentResolverService implements Resolve<EmploymentItem>{

  constructor(private historyService: HistoryService) { }


resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmploymentItem> | Promise<EmploymentItem> | EmploymentItem {

    return this.historyService.getEmploymentItem(route.params.id);

return 

}

}
