import {Speaker} from "../Speaker";
import {SpeakerMapper} from "./SpeakerMapper";
import {TalkPlanning} from "../TalkPlanning";

export class TalkMapper {
  static toModel(data: any): TalkPlanning {
    let speakersApi: Speaker[] = []
    // @ts-ignore
    data.talk.speakers.forEach(speaker => {
      speakersApi.push(SpeakerMapper.toModel(speaker))
    })

    return new TalkPlanning(
      {
        name: data.room.name,
        description: data.room.description,
        capacity: data.room.capacity,
        id: data.room.id,
        conference: data.room.conference
      },
      {
        id: data.talk.id,
        title: data.talk.title,
        description: data.talk.description,
        level: data.talk.level,
        language: data.talk.language,
        conference: data.talk.conference,
        theme: data.talk.theme,
        format: data.talk.format,
        speakers: speakersApi
      },
      new Date(data.schedule)
    )
  }
}
