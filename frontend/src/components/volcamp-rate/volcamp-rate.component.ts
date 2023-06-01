import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FeedbackInitService} from "../../services/FeedbackInitService";
import {NoteChangeEventArgs} from "../../event/NoteChangeEventArgs";

@Component({
  selector: 'app-volcamp-rate',
  templateUrl: './volcamp-rate.component.html',
  styleUrls: ['./volcamp-rate.component.sass']
})
export class VolcampRateComponent {
  @Output() noteOutput: EventEmitter<number> = new EventEmitter<number>();
  @Input() noted = false;
  note: number = -1;

  constructor(feedbackInitService: FeedbackInitService) {
      feedbackInitService.eventEmitterNote.on((data : NoteChangeEventArgs) => {
        this.note = data.note;
      })
  }

  isChecked(note: number): boolean {
    return this.note >= note;
  }

  check(note: number) {
    if (this.note != note) this.note = note;
    else this.note = -1;
    this.noteOutput.emit(this.note)
  }

}
