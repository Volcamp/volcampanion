import {Identifier} from "./Identifier";

export interface CreatePlanning{
  room: Identifier | null,
  talk: Identifier,
  schedule: Date,
}
