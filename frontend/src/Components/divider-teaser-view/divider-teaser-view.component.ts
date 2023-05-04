import {Component, Input} from '@angular/core';
import {DividerPlanning} from "../../Data/DTO/DividerPlanning";

@Component({
  selector: 'app-divider-teaser-view',
  templateUrl: './divider-teaser-view.component.html',
  styleUrls: ['./divider-teaser-view.component.sass']
})
export class DividerTeaserViewComponent {
  @Input() dividerPlanning!: DividerPlanning;
  startDate = new Date();

  ngOnInit(): void {
    this.startDate = new Date(this.dividerPlanning.schedule)
  }
}
