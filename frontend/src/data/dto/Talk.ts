import {Conference} from "./Conference";
import {Theme} from "./Theme";
import {Format} from "./Format";
import {Speaker} from "./Speaker";

export interface TalkTeaser {
  id: number;
  title: string;
  description: string;
  level: string;
  language: string;
  conference: Conference;
  format: Format;
}

export interface Talk extends TalkTeaser {
  theme: Theme;
  speakers: Speaker[];
}



