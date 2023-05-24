import {Identifier} from "./Identifier";

export interface CreateTalk {
  title: string
  description: string
  level: string
  language: string
  theme: Identifier
  format: Identifier
  conference: Identifier
  speakers: Identifier[]
}

