import {Conference} from "./Conference";
import {Theme} from "./Theme";
import {Format} from "./Format";
import {Speaker} from "./Speaker";
export interface Talk {
  id: number;
  title: string;
  description: string;
  level: string;
  language: string;
  conference: Conference;
  theme: Theme;
  format: Format;
  speakers: Speaker[];
}

