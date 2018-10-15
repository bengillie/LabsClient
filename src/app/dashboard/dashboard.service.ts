import { Injectable } from '@angular/core';

import { IDashboardService } from './i-dashboard.service';


@Injectable()
export class DashboardService implements IDashboardService {

   getWidgets() {
      throw new Error('Method not implemented.');
   }

}
