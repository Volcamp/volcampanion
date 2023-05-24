import {Component, Input} from '@angular/core';
import {Talk} from "../../data/dto/Talk";

@Component({
  selector: 'app-admin-talk-preview',
  templateUrl: './admin-talk-preview.component.html',
  styleUrls: ['./admin-talk-preview.component.sass']
})
export class AdminTalkPreviewComponent {
  @Input() talk! : Talk;

}
