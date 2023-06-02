import {Component, Input} from '@angular/core';
import {Speaker} from "../../data/dto/input/Speaker";
import {
  AdminDialogAddEditSpeakerComponent
} from "../admin-dialog-add-edit-speaker/admin-dialog-add-edit-speaker.component";
import {AdminDialogDeleteSpeakerComponent} from "../admin-dialog-delete-speaker/admin-dialog-delete-speaker.component";

@Component({
  selector: 'app-admin-speaker-preview',
  templateUrl: './admin-speaker-preview.component.html',
  styleUrls: ['./admin-speaker-preview.component.sass']
})
export class AdminSpeakerPreviewComponent {
  @Input() speaker!: Speaker;

  deleteDialog = AdminDialogDeleteSpeakerComponent;
  editDialog = AdminDialogAddEditSpeakerComponent;
}
