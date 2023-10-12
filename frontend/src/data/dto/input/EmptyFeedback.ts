import {Feedback} from "./Feedback";

export class EmptyFeedback implements Feedback {
  comment: string;
  rating: number;

  constructor() {
    this.comment = "";
    this.rating = 5;
  }
}
