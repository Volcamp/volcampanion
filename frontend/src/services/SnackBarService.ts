import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";

@Injectable()
export class SnackBarService{
  constructor(private _snackBar: MatSnackBar) {
  }
  open(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
