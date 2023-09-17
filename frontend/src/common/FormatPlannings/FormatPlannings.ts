import {DividerPlanning} from "../../data/dto/input/DividerPlanning";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {BreakMapper} from "../../data/dto/input/mappers/BreakMapper";
import {TalkMapper} from "../../data/dto/input/mappers/TalkMapper";

function addDayDelimiterForDate(eventDate: Date, finalData: Planning[]) {
  let date = new Date(eventDate);
  date.setHours(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setMinutes(0);
  finalData.push(new DividerPlanning(new Date(date)));
}

export function formatPlanning(data: any[]) {
  const finalData: Planning[] = [];
  if (data?.length === 0) return finalData;

  //Handle first day for first item
  if (data?.length > 0) {
    addDayDelimiterForDate(data[0].schedule, finalData);
  }
  let previousSchedule = new Date(data[0].schedule);
  let currentSchedule;
  for (let planning of data) {
    currentSchedule = new Date(planning.schedule);

    if (previousSchedule.getDay() !== currentSchedule.getDay()) {
      addDayDelimiterForDate(planning.schedule, finalData);
      previousSchedule = currentSchedule;
    }

    switch (planning.talk.format.type) {
      case PlanningType.BREAK:
        finalData.push(BreakMapper.toModel(planning));
        break;
      default:
        finalData.push(TalkMapper.toModel(planning));
        break;
    }

  }
  return finalData;
}
