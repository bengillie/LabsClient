import { Observable } from 'rxjs/Observable';

import { TimeTableEvent } from '../model/time-table-event';
import { TimeSlot } from '../model/time-slot';


export interface ITimeTableService {

   getEvents(): Observable<TimeTableEvent[]>;

   getTimeSlots(): Observable<TimeSlot[]>;

}
