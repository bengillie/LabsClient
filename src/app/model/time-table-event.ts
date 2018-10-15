
export class TimeTableEvent {
   day: string;
   endTime: string;

   // will be used when calculating size height of div
   height: string;

   id: number;

   // length in hours
   length: number;

   name: string;

   // used to calculate start position of the div
   position: string;

   startTime: string;

   // with decimal point for minutes (as a fraction so 0.5 = 30mins)
   startHour: number;

   startMinute: number;
}
