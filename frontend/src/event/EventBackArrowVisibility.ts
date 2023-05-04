import {EventArgs} from "./EventArgs";

export class EventBackArrowVisibility extends EventArgs {
  constructor(data: boolean) {
    super();
    this._data = data

  }

  get data(): boolean {
    return this._data;
  }

  set data(value: boolean) {
    this._data = value;
  }

  private _data: boolean;

}
