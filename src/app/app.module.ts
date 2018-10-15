import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TimeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'DashboardService', useClass: environment.dashboardServiceType},
    {provide: 'TimeTableService', useClass: environment.timeTableServiceType},
    {provide: 'ApiUrl', useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
