import {Component, Input} from '@angular/core';
import {DividerPlan} from "../../Data/DTO/DividerPlan";

@Component({
  selector: 'app-divider-teaser-view',
  templateUrl: './divider-teaser-view.component.html',
  styleUrls: ['./divider-teaser-view.component.sass']
})
export class DividerTeaserViewComponent {
  @Input() datePlan!: DividerPlan;

  startDate = new Date();

  ngOnInit(): void {
    this.startDate = new Date(this.datePlan.schedule)
  }

}
