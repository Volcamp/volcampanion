import {Planning} from "../DTO/Planning";
import {Speaker} from "../DTO/Speaker";
import {TalkPlanning} from "../DTO/TalkPlanning";

export abstract class DataService {
  abstract providePlans(): Promise<Planning[]>
  abstract provideSpeakers(): Promise<Speaker[]>
  abstract getTalkById(idTalk : number): Promise<TalkPlanning | undefined>
  abstract getSpeakerById(idSpeaker : number): Promise<Speaker | undefined>
  // Est ce que je pousse le truc en fesant un class generique ...
}
