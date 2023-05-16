import { Component } from '@angular/core';

@Component({
  selector: 'app-volcamp-rate',
  templateUrl: './volcamp-rate.component.html',
  styleUrls: ['./volcamp-rate.component.sass']
})
export class VolcampRateComponent {
  note : number = -1;

  isChecked(note : number) : boolean{
    return this.note>= note;
  }

  check(note: number) {
    console.log("he")
    if(this.note!=note) this.note=note;
    else this.note = -1;
  }
}
