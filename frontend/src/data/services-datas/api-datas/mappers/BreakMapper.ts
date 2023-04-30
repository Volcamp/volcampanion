import {BreakPlanning} from "../../../dto/BreakPlanning";

export class BreakMapper {
  static toModel(data: any): BreakPlanning {
    return new BreakPlanning(
      {
        id: data.talk.id,
        title: data.talk.title,
        description: data.talk.description,
        level: data.talk.level,
        language: data.talk.language,
        conference: data.talk.language,
        format: data.talk.format
      },
      new Date(data.schedule))
  }
}

