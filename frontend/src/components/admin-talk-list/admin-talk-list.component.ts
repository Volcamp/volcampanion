import {Component, Input} from '@angular/core';
import {Talk} from "../../data/dto/input/Talk";
import {AdminDialogAddEditTalkComponent} from "../admin-dialog-add-edit-talk/admin-dialog-add-edit-talk.component";
import {MatDialog} from "@angular/material/dialog";
import {AdminDialogInfoTalkComponent} from "../admin-dialog-info-talk/admin-dialog-info-talk.component";

@Component({
  selector: 'app-admin-talk-list',
  templateUrl: './admin-talk-list.component.html',
  styleUrls: ['./admin-talk-list.component.sass']
})
export class AdminTalkListComponent {
  @Input() talks!: Talk[];
  addDialog = AdminDialogAddEditTalkComponent;

  constructor(public dialog: MatDialog) {
  }

  openDialog(item : Talk) {
    const dialogRef = this.dialog.open(AdminDialogInfoTalkComponent, {
      data: item,
      autoFocus : false
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
