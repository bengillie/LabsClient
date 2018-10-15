import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ITimeTableService } from './i-time-table.service';
import { TimeTableEvent } from '../model/time-table-event';
import { TimeSlot } from '../model/time-slot';

@Injectable()
export class TimeTableService implements ITimeTableService {

   timeTableHourHeight = 8.3;

   calculateEventLength(event: TimeTableEvent) {
      event.height = (this.timeTableHourHeight * event.length) + '%';
   }

   calculateEventPosition(event: TimeTableEvent) {
      const multiplier = event.startHour - 7;
      const position = this.timeTableHourHeight * multiplier;

      event.position = position + '%';
   }

   calculateTimeSlotPosition(timeSlot: TimeSlot) {
      const multiplier = timeSlot.startHour - 7;
      const position = this.timeTableHourHeight * multiplier;

      timeSlot.position = position + '%';
   }

   getEvents(): Observable<TimeTableEvent[]> {
      const events: TimeTableEvent[] = [];

      const event1: TimeTableEvent = {
         day: 'Monday',
         endTime: '10:30',
         height: '',
         id: 1,
         length: 1.5,
         name: 'Biology',
         position: '',
         startTime: '9:00',
         startHour: 9,
         startMinute: 0
      };
      const event2: TimeTableEvent = {
         day: 'Monday',
         endTime: '14:00',
         height: '',
         id: 2,
         length: 1,
         name: 'Chemistry',
         position: '',
         startTime: '13:00',
         startHour: 13,
         startMinute: 0
      };
      const event3: TimeTableEvent = {
         day: 'Tuesday',
         endTime: '10:00',
         height: '',
         id: 3,
         length: 1,
         name: 'Physics',
         position: '',
         startTime: '9:00',
         startHour: 9,
         startMinute: 0
      };
      const event4: TimeTableEvent = {
         day: 'Wednesday',
         endTime: '14:00',
         height: '',
         id: 4,
         length: 2,
         name: 'PE',
         position: '',
         startTime: '12:00',
         startHour: 12,
         startMinute: 0
      };
      const event5: TimeTableEvent = {
         day: 'Wednesday',
         endTime: '16:30',
         height: '',
         id: 5,
         length: 1.5,
         name: 'History',
         position: '',
         startTime: '15:00',
         startHour: 15,
         startMinute: 0
      };
      const event6: TimeTableEvent = {
         day: 'Thursday',
         endTime: '13:30',
         height: '',
         id: 6,
         length: 3,
         name: 'History',
         position: '',
         startTime: '10:30',
         startHour: 10.5,
         startMinute: 0
      };
      const event7: TimeTableEvent = {
         day: 'Thursday',
         endTime: '18:00',
         height: '',
         id: 7,
         length: 0.5,
         name: 'History',
         position: '',
         startTime: '17:30',
         startHour: 17.5,
         startMinute: 0
      };

      events.push(event1);
      events.push(event2);
      events.push(event3);
      events.push(event4);
      events.push(event5);
      events.push(event6);
      events.push(event7);

      for (const event of events) {
         this.calculateEventPosition(event);
         this.calculateEventLength(event);
      }

      return Observable.of(events);
   }

   getTimeSlots(): Observable<TimeSlot[]> {
      const timeSlots: TimeSlot[] = [];

      const timeslot8: TimeSlot = {
         position: '',
         startHour: 8,
         time: '8:00'
      };

      const timeslot9: TimeSlot = {
         position: '',
         startHour: 9,
         time: '9:00'
      };

      const timeslot10: TimeSlot = {
         position: '',
         startHour: 10,
         time: '10:00'
      };

      const timeslot11: TimeSlot = {
         position: '',
         startHour: 11,
         time: '11:00'
      };

      const timeslot12: TimeSlot = {
         position: '',
         startHour: 12,
         time: '12:00'
      };

      const timeslot13: TimeSlot = {
         position: '',
         startHour: 13,
         time: '13:00'
      };

      const timeslot14: TimeSlot = {
         position: '',
         startHour: 14,
         time: '14:00'
      };

      const timeslot15: TimeSlot = {
         position: '',
         startHour: 15,
         time: '15:00'
      };

      const timeslot16: TimeSlot = {
         position: '',
         startHour: 16,
         time: '16:00'
      };

      const timeslot17: TimeSlot = {
         position: '',
         startHour: 17,
         time: '17:00'
      };

      const timeslot18: TimeSlot = {
         position: '',
         startHour: 18,
         time: '18:00'
      };

      timeSlots.push(timeslot8);
      timeSlots.push(timeslot9);
      timeSlots.push(timeslot10);
      timeSlots.push(timeslot11);
      timeSlots.push(timeslot12);
      timeSlots.push(timeslot13);
      timeSlots.push(timeslot14);
      timeSlots.push(timeslot15);
      timeSlots.push(timeslot16);
      timeSlots.push(timeslot17);
      timeSlots.push(timeslot18);

      for (const timeSlot of timeSlots) {
         this.calculateTimeSlotPosition(timeSlot);
      }

      return Observable.of(timeSlots);
   }

}
