import {Component} from '@angular/core';

@Component({
  selector: 'app-volcamp-feedback',
  templateUrl: './volcamp-feedback.component.html',
  styleUrls: ['./volcamp-feedback.component.sass']
})
export class VolcampFeedbackComponent {
  note: number = -1;

  update(note: number) {
    this.note = note;
  }

  sendNote() {
    // Api request
  }
}
