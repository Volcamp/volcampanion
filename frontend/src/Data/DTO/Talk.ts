import {Conference} from "./Conference";
import {Theme} from "./Theme";
import {Format} from "./Format";
import {Speaker} from "./Speaker";

export interface MiniTalk {
  id: number;
  title: string;
  description: string;
  level: string;
  language: string;
  conference: Conference;
  format: Format;
}

export interface Talk extends MiniTalk{
  theme: Theme;
  speakers: Speaker[];
}



