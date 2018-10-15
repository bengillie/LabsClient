import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AppRoutingPreloader } from './app-routing.preloader';

// components
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeTableComponent } from './time-table/time-table.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {state: 'dashboard', preload: true}
  },
  {
    path: 'timeTable',
    component: TimeTableComponent,
    data: {state: 'timeTable', preload: true}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: AppRoutingPreloader})
  ],
  exports: [RouterModule],
  providers: [
   AppRoutingPreloader
  ]
})
export class AppRoutingModule { }
