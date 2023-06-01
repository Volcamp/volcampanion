import {EventArgs} from "./EventArgs";

export class FeedbackTalkInitEventArgs extends EventArgs {
  constructor(data: string) {
    super();
    this._idTalk = data
  }

  get idTalk(): string {
    return this._idTalk;
  }

  private _idTalk: string;

}
