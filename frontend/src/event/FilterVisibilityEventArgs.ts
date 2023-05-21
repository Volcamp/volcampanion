import {EventArgs} from "./EventArgs";

export class FilterVisibilityEventArgs extends EventArgs {
  constructor(data: boolean) {
    super();
    this._isVisible = data

  }

  get IsVisible(): boolean {
    return this._isVisible;
  }

  private _isVisible: boolean;

}
