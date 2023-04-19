import {Conference} from "./Conference";

export interface Speaker {
  id: number;
  name: string;
  email: string;
  twitter: string;
  linkedin: string;
  biography: string;
  photo: string;
  conference: Conference;
}

