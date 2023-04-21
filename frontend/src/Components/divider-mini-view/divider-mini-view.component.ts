import {Component, Input} from '@angular/core';
import {DividerPlan} from "../../Data/DTO/DividerPlan";

@Component({
  selector: 'app-divider-mini-view',
  templateUrl: './divider-mini-view.component.html',
  styleUrls: ['./divider-mini-view.component.sass']
})
export class DividerMiniViewComponent {
  @Input() datePlan!: DividerPlan;

  startDate = new Date();

  ngOnInit(): void {
    this.startDate=new Date(this.datePlan.schedule)
  }

}
