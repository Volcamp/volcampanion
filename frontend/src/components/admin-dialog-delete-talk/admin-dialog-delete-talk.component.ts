import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-dialog-delete-talk',
  templateUrl: './admin-dialog-delete-talk.component.html',
  styleUrls: ['./admin-dialog-delete-talk.component.sass']
})
export class AdminDialogDeleteTalkComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDialogDeleteTalkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  closeDialog() {
    this.dialogRef.close()
  }

  delete() {
    //requete Delete
    this.dialogRef.close()

  }
}
