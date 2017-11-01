import {AfterViewInit, Component} from '@angular/core';
import * as m from 'moment';


declare var jQuery: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  events: any[];
  eventId = 4;

  constructor() {
    this.events =
      [
        {"id": "2", "start": "2017-11-01T02:00:00", "end": "2017-11-01T03:00:00", "title": "event 2", "color": "green"},
        {"id": "4", "start": "2017-11-01T05:00:00", "end": "2017-11-01T06:00:00", "title": "event 4", "color": "red"},
        {
          "id": "3",
          "start": "2017-11-01T03:30:00",
          "end": "2017-11-01T04:30:00",
          "title": "event 3",
          "color": "orange"
        },
        {"id": "1", "start": "2017-11-01T12:30:00", "end": "2017-11-01T13:30:00", "title": "event 1", "color": "blue"}
      ]


  }

  ngAfterViewInit(): void {
    jQuery('#calendar').fullCalendar({
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      height: 600,
      header: {
        left: 'prev,next,today',
        center: 'title',
        right: 'agendaDay,agendaWeek,month,listDay'
      },
      timezone: 'local',
      allDaySlot: false,
      defaultView: 'agendaDay',
      selectable: true,
      events: this.events,
      select: this.selectEvent.bind(this)
    });
  }

  selectEvent(start, end, jsEvent, view) {
    console.log(`start date : ${m(start).format('YYYY-MM-DDTHH:mm:ss')} , End date : ${m(end).format('YYYY-MM-DDTHH:mm:ss')} `);
    console.log('js event is : ', jsEvent.target);
    console.log('view is :', view.name);
    this.eventId = ++this.eventId;
    this.events.push({
      "id": this.eventId,
      "start": this.dateTostring(start),
      "end": this.dateTostring(end),
      "title": "event "+this.eventId,
      "color": "orange"
    })
  }

  dateTostring(date: m.Moment): string {
    return m(date).format('YYYY-MM-DDTHH:mm:ss').toString();
  }

}
