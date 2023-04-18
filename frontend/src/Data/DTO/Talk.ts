import {Identifier} from "./Identifier";
export interface Talk {
  title: string;
  description: string;
  level: string;
  language: string;
  theme:Identifier;
  format: Identifier;
  conference: Identifier;
  speakers: Identifier[];
  id: number;
}
