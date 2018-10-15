import { Component, OnInit, Inject } from '@angular/core';

import { TimeTableEvent } from '../model/time-table-event';
import { ITimeTableService } from './i-time-table.service';
import { TimeSlot } from '../model/time-slot';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.less']
})
export class TimeTableComponent implements OnInit {

private allEvents: TimeTableEvent[] = [];
public mondayEvents: TimeTableEvent[] = [];
public tuesdayEvents: TimeTableEvent[] = [];
public wednesdayEvents: TimeTableEvent[] = [];
public thursdayEvents: TimeTableEvent[] = [];
public fridayEvents: TimeTableEvent[] = [];
public saturdayEvents: TimeTableEvent[] = [];
public sundayEvents: TimeTableEvent[] = [];

public timeSlots: TimeSlot[] = [];

  constructor(@Inject('TimeTableService') private timeTableService: ITimeTableService ) { }

  ngOnInit() {
    this.setupEvents();
    this.timeTableService.getTimeSlots().subscribe(response => this.timeSlots = response);
  }

  async setupEvents() {
    await this.timeTableService.getEvents().subscribe(response => this.allEvents = response);

    this.mondayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'monday');
    this.tuesdayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'tuesday');
    this.wednesdayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'wednesday');
    this.thursdayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'thursday');
    this.fridayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'friday');
    this.saturdayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'saturday');
    this.sundayEvents = this.allEvents.filter(x => x.day.toLowerCase() === 'sunday');
  }

}
