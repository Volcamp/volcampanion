import {Component, Inject} from '@angular/core';
import {AdminDialogDeleteTalkComponent} from "../admin-dialog-delete-talk/admin-dialog-delete-talk.component";
import {AdminDialogAddTalkComponent} from "../admin-dialog-add-talk/admin-dialog-add-talk.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Speaker} from "../../data/dto/input/Speaker";
import {
  AdminDialogAddEditSpeakerComponent
} from "../admin-dialog-add-edit-speaker/admin-dialog-add-edit-speaker.component";

@Component({
  selector: 'app-admin-dialog-info-speaker',
  templateUrl: './admin-dialog-info-speaker.component.html',
  styleUrls: ['./admin-dialog-info-speaker.component.sass']
})
export class AdminDialogInfoSpeakerComponent {
  deleteDialog = AdminDialogDeleteTalkComponent;
  editDialog = AdminDialogAddEditSpeakerComponent;
  speaker: Speaker;
  unknown: string = "Inconnue"

  constructor(public dialogRef: MatDialogRef<AdminDialogInfoSpeakerComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.speaker = this.data
  }

}
