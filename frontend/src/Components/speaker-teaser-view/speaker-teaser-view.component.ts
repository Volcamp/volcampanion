import {Component, Input} from '@angular/core';
import {Speaker} from "../../Data/DTO/Speaker";

@Component({
  selector: 'app-speaker-teaser-view',
  templateUrl: './speaker-teaser-view.component.html',
  styleUrls: ['./speaker-teaser-view.component.sass']
})
export class SpeakerTeaserViewComponent {
  @Input() speaker!: Speaker;
}
