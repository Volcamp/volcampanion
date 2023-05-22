import {EventArgs} from "./EventArgs";

export class LogEventArgs extends EventArgs {
  constructor(data: boolean) {
    super();
    this._isLog = data
  }

  get IsLog(): boolean {
    return this._isLog;
  }

  private _isLog: boolean;

}
