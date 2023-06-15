import {Component, Input} from '@angular/core';
import {
  AdminDialogAddEditConferenceComponent
} from "../admin-dialog-add-edit-conference/admin-dialog-add-edit-conference.component";
import {Conference} from "../../data/dto/input/Conference";

@Component({
  selector: 'app-admin-conference-list',
  templateUrl: './admin-conference-list.component.html',
  styleUrls: ['./admin-conference-list.component.sass']
})
export class AdminConferenceListComponent {
  @Input() conferences! : Conference[]

  addDialog = AdminDialogAddEditConferenceComponent;

}
