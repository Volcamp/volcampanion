import {EventArgs} from "./EventArgs";

export class PlanningExternalDropEventArgs extends EventArgs {

  constructor(idTalk: number, idRoom: number, date: Date) {
    super();
    this._idTalk = idTalk;
    this._idRoom = idRoom;
    this._date = date;
  }

  get idTalk(): number {
    return this._idTalk;
  }

  private _idTalk: number;

  get idRoom(): number {
    return this._idRoom;
  }

  private _idRoom: number;


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
  private _date: Date;

}
