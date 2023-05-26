import {TalkPlanning} from "../../input/TalkPlanning";

export class PlanningMapper {
  static toDTO(talkPlanning: TalkPlanning): TalkPlanning {
    const schedule = new Date(talkPlanning.schedule.getTime() - (talkPlanning.schedule.getTimezoneOffset() * 60000));
    return new TalkPlanning((talkPlanning as TalkPlanning).room, (talkPlanning as TalkPlanning).talk, schedule);
  }
}
