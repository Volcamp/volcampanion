import {TalkPlanning} from "../../input/TalkPlanning";
import {CreatePlanning} from "../CreatePlanning";

export class PlanningMapper {
  static toDTO(talkPlanning: TalkPlanning): TalkPlanning {
    const schedule = new Date(talkPlanning.schedule.getTime() - (talkPlanning.schedule.getTimezoneOffset() * 60000));
    return new TalkPlanning((talkPlanning as TalkPlanning).room, (talkPlanning as TalkPlanning).talk, schedule);
  }

  static toTalkPlanning(jsonPlanning: any): TalkPlanning {
    return new TalkPlanning(jsonPlanning.room, jsonPlanning.talk, new Date(jsonPlanning.schedule));
  }

  static toCreateDTO(talkPlanning: TalkPlanning): CreatePlanning {
    const schedule = new Date(talkPlanning.schedule.getTime() - (talkPlanning.schedule.getTimezoneOffset() * 60000));
    var res = {
      room : {id : talkPlanning.room?.id},
      talk : {id : talkPlanning.talk.id},
      schedule : schedule
    };
    return <CreatePlanning>res;
  }
}
