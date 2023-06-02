import {Identifier} from "./Identifier";

export interface CreateSpeaker {
  name: string;
  email: string;
  twitter: string;
  linkedin: string;
  biography: string;
  photo: string;
  company: string;
  conference: Identifier
}

