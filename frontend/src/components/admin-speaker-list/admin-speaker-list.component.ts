import {Component, Input} from '@angular/core';
import {Talk} from "../../data/dto/input/Talk";
import {AdminDialogAddTalkComponent} from "../admin-dialog-add-talk/admin-dialog-add-talk.component";
import {MatDialog} from "@angular/material/dialog";
import {AdminDialogInfoTalkComponent} from "../admin-dialog-info-talk/admin-dialog-info-talk.component";
import {Speaker} from "../../data/dto/input/Speaker";
import {AdminDialogInfoSpeakerComponent} from "../admin-dialog-info-speaker/admin-dialog-info-speaker.component";
import {
  AdminDialogAddEditSpeakerComponent
} from "../admin-dialog-add-edit-speaker/admin-dialog-add-edit-speaker.component";

@Component({
  selector: 'app-admin-speaker-list',
  templateUrl: './admin-speaker-list.component.html',
  styleUrls: ['./admin-speaker-list.component.sass']
})
export class AdminSpeakerListComponent {
  @Input() speakers!: Speaker[];
  addDialog = AdminDialogAddEditSpeakerComponent;

  constructor(public dialog: MatDialog) {
  }

  openDialog(item : Speaker) {
    const dialogRef = this.dialog.open(AdminDialogInfoSpeakerComponent, {
      data: item,
      autoFocus : false
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
