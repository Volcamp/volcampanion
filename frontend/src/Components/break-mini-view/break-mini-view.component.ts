import {Component, Input, OnInit} from '@angular/core';
import {BreakPlan} from "../../Data/DTO/BreakPlan";

@Component({
  selector: 'app-break-mini-view',
  templateUrl: './break-mini-view.component.html',
  styleUrls: ['./break-mini-view.component.sass']
})
export class BreakMiniViewComponent implements OnInit{
  @Input() breakPlan!: BreakPlan;

  startDate = new Date();
  endDate = new Date();
  ngOnInit(): void {

    this.startDate=new Date(this.breakPlan.schedule)

    this.endDate=new Date(this.startDate.getTime() + this.breakPlan.break.format.duration *60000)

  }
}
