import {Component, Input} from '@angular/core';
import {Talk} from "../../data/dto/input/Talk";
import {AdminDialogDeleteTalkComponent} from "../admin-dialog-delete-talk/admin-dialog-delete-talk.component";
import {AdminDialogAddEditTalkComponent} from "../admin-dialog-add-edit-talk/admin-dialog-add-edit-talk.component";

@Component({
  selector: 'app-admin-talk-preview',
  templateUrl: './admin-talk-preview.component.html',
  styleUrls: ['./admin-talk-preview.component.sass']
})
export class AdminTalkPreviewComponent {
  @Input() talk! : Talk;

  deleteDialog = AdminDialogDeleteTalkComponent;
  editDialog = AdminDialogAddEditTalkComponent;

}
