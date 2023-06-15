import {Component, Input} from '@angular/core';
import {Conference} from "../../data/dto/input/Conference";
import {AdminDialogDeleteSpeakerComponent} from "../admin-dialog-delete-speaker/admin-dialog-delete-speaker.component";
import {
  AdminDialogAddEditSpeakerComponent
} from "../admin-dialog-add-edit-speaker/admin-dialog-add-edit-speaker.component";
import {
  AdminDialogDeleteConferenceComponent
} from "../admin-dialog-delete-conference/admin-dialog-delete-conference.component";
import {
  AdminDialogAddEditConferenceComponent
} from "../admin-dialog-add-edit-conference/admin-dialog-add-edit-conference.component";
import { formatDate } from 'src/common/DateFunc';

@Component({
  selector: 'app-admin-conference-preview',
  templateUrl: './admin-conference-preview.component.html',
  styleUrls: ['./admin-conference-preview.component.sass']
})
export class AdminConferencePreviewComponent {
  @Input() conference! : Conference;

  deleteDialog = AdminDialogDeleteConferenceComponent;
  editDialog = AdminDialogAddEditConferenceComponent;

  formatDate(date: Date) {
    return formatDate(date)
  }

}
