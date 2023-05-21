import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-volcamp-rate',
  templateUrl: './volcamp-rate.component.html',
  styleUrls: ['./volcamp-rate.component.sass']
})
export class VolcampRateComponent {
  @Output() noteOutput: EventEmitter<number> = new EventEmitter<number>();
  note: number = -1;

  isChecked(note: number): boolean {
    return this.note >= note;
  }

  check(note: number) {
    if (this.note != note) this.note = note;
    else this.note = -1;
    this.noteOutput.emit(this.note)
  }
}
