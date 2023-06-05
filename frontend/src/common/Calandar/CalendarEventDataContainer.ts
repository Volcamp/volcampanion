import {CalendarEvent} from "angular-calendar";

export interface CalendarEventDataContainer<Data> extends CalendarEvent {
  data: Data;
}
