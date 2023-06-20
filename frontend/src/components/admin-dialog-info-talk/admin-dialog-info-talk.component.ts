import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AdminDialogDeleteTalkComponent} from "../admin-dialog-delete-talk/admin-dialog-delete-talk.component";
import {AdminDialogAddEditTalkComponent} from "../admin-dialog-add-edit-talk/admin-dialog-add-edit-talk.component";
import {Speaker} from "../../data/dto/input/Speaker";
import {concatenate} from "../../common/Concatenate";
import {Talk} from "../../data/dto/input/Talk";
import {AdminDialogDeleteSpeakerComponent} from "../admin-dialog-delete-speaker/admin-dialog-delete-speaker.component";

@Component({
  selector: 'app-admin-dialog-info-talk',
  templateUrl: './admin-dialog-info-talk.component.html',
  styleUrls: ['./admin-dialog-info-talk.component.sass']
})
export class AdminDialogInfoTalkComponent {
  deleteDialog = AdminDialogDeleteSpeakerComponent;
  editDialog = AdminDialogAddEditTalkComponent;
  speakersNames: string = "";
  talk: Talk;
  unknown : string = "Inconnue"

  constructor(public dialogRef: MatDialogRef<AdminDialogInfoTalkComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.speakersNames = concatenate(this.speakerNames(this.data.speakers));
    this.talk = this.data
  }

  speakerNames(speakers: Speaker[] | undefined): string[] {
    if (speakers === undefined) {
      return []
    }
    return speakers.map(speaker => speaker.name)
  }
}
