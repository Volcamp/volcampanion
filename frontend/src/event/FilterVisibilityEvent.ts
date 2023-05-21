import Event from "./Event";
import {FilterVisibilityEventArgs} from "./FilterVisibilityEventArgs";

export class FilterVisibilityEvent extends Event<FilterVisibilityEventArgs> {
  constructor(data: boolean) {
    super();
    this._isVisible = data

  }

  get IsVisible(): boolean {
    return this._isVisible;
  }

  private _isVisible: boolean;

}
