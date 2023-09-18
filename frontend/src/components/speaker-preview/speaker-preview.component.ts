import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-speaker-preview',
  templateUrl: './speaker-preview.component.html',
  styleUrls: ['./speaker-preview.component.sass']
})
export class SpeakerPreviewComponent {
  @Input() name: string = ''
  @Input() photo: string = ''
  @Input() company: string = ''
  @Input() room: string = ''
  @Input() planningTime: string = ''


}
