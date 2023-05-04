import {Component, Input, OnInit} from '@angular/core';
import {BreakPlanning} from "../../Data/DTO/BreakPlanning";

@Component({
  selector: 'app-break-teaser-view',
  templateUrl: './break-teaser-view.component.html',
  styleUrls: ['./break-teaser-view.component.sass']
})
export class BreakTeaserViewComponent implements OnInit {
  @Input() breakPlanning!: BreakPlanning;
  startDate = new Date();
  endDate = new Date();

  ngOnInit(): void {
    this.startDate = new Date(this.breakPlanning.schedule)
    this.endDate = new Date(this.startDate.getTime() + this.breakPlanning.break.format.duration * 60000)
  }
}
