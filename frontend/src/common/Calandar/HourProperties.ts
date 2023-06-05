export const HOUR_DEFAULT_PROPERTIES : HourProperties = {
  endHour: 18,
  segmentHour: 4,
  startHour: 8

}


export interface HourProperties {
  startHour: number;
  endHour: number;
  segmentHour: number;
}
