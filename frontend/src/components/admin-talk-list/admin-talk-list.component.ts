import {Component, Input} from '@angular/core';
import {Talk} from "../../data/dto/Talk";

@Component({
  selector: 'app-admin-talk-list',
  templateUrl: './admin-talk-list.component.html',
  styleUrls: ['./admin-talk-list.component.sass']
})
export class AdminTalkListComponent {
  @Input() talks! : Talk[];

}
