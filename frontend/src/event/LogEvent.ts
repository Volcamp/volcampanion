import Event from "./Event";
import {LogEventArgs} from "./LogEventArgs";

export class LogEvent extends Event<LogEventArgs> {
  constructor(data: boolean) {
    super();
    this._isLog = data
  }

  get IsLog(): boolean {
    return this._isLog;
  }

  private _isLog: boolean;

}
