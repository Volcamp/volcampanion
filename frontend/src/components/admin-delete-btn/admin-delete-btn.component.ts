import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminDialogDeleteTalkComponent} from "../admin-dialog-delete-talk/admin-dialog-delete-talk.component";

@Component({
  selector: 'app-admin-delete-btn',
  templateUrl: './admin-delete-btn.component.html',
  styleUrls: ['./admin-delete-btn.component.sass']
})
export class AdminDeleteBtnComponent {
  @Input() name!: string;
  @Input() id!: string;

  @Input() dialogToOpen!: any;

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    let nameParam = this.name
    let idParam = this.id
    const dialogRef = this.dialog.open(this.dialogToOpen, {
      data: {nameParam, idParam},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
