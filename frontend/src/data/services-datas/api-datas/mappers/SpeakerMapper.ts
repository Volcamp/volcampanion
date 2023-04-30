import {Speaker} from "../../../dto/Speaker";

export class SpeakerMapper {
  static toModel(data: any): Speaker {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      twitter: data.twitter,
      linkedin: data.linkedin,
      biography: data.biography,
      photo: data.photo,
      conference: data.conference,
      company: data.company
    }
  }
}
