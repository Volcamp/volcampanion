import {Component, Input, OnInit} from '@angular/core';
import {BreakPlan} from "../../Data/DTO/BreakPlan";

@Component({
  selector: 'app-break-teaser-view',
  templateUrl: './break-teaser-view.component.html',
  styleUrls: ['./break-teaser-view.component.sass']
})
export class BreakTeaserViewComponent implements OnInit {
  @Input() breakPlan!: BreakPlan;

  startDate = new Date();
  endDate = new Date();

  ngOnInit(): void {

    this.startDate = new Date(this.breakPlan.schedule)

    this.endDate = new Date(this.startDate.getTime() + this.breakPlan.break.format.duration * 60000)

  }
}
