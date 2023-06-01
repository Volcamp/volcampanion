import {EventArgs} from "./EventArgs";

export class NoteChangeEventArgs extends EventArgs {
  constructor(data: number) {
    super();
    this._note = data
  }

  get note(): number {
    return this._note;
  }

  private _note: number;

}
