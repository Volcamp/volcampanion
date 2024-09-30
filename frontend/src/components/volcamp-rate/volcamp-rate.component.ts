import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FeedbackInitService} from "../../services/FeedbackInitService";
import {LocalStorageFeedbacksService} from "../../services/LocalStorageFeedbacksService";

@Component({
  selector: 'app-volcamp-rate',
  templateUrl: './volcamp-rate.component.html',
  styleUrls: ['./volcamp-rate.component.sass']
})
export class VolcampRateComponent {
  private DEFAULT_NOTE: number = 5

  @Output() noteOutput: EventEmitter<number> = new EventEmitter<number>();
  @Input() noted = false;
  private _currentNote: number = -1;

  @Input()
  set currentNote(value: number | undefined) {
    this._currentNote = value ?? -1;
    this.onCurrentNoteChange(value ?? -1);
  }

  get currentNote(): number {
    return this._currentNote;
  }

  // Cette méthode sera déclenchée à chaque changement de currentNote
  onCurrentNoteChange(newNote: number) {
    this.note = newNote;
  }

  note: number = this.DEFAULT_NOTE;

  constructor(feedbackInitService: FeedbackInitService, private localStorageFeedbacksService: LocalStorageFeedbacksService) {
    this.check(this.DEFAULT_NOTE);
    this.note = this.currentNote ?? this.DEFAULT_NOTE;
  }

  isChecked(note: number): boolean {
    return this.note >= note;
  }

  check(note: number) {
    if (this.note != note) {
      this.note = note
    } else this.note = 0;
    this.noteOutput.emit(this.note)
  }

}
