import {Conference} from "./Conference";

export interface Room {
  id: number;
  name: string;
  description: string;
  capacity: number;
  conference: Conference;
}
