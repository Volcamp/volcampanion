import {Component, Input} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {EventBackArrowVisibility} from "../../event/EventBackArrowVisibility";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {FilterMenuComponent} from "../filter-menu/filter-menu.component";
import {PlanningType} from "../../data/dto/Planning";
import {PlanningTheme} from "../../data/dto/Theme";
import {EventFilterPlanning, FilterPlanning} from "../../event/EventFilterPlanning";
import {FilterPlanningsService} from "../../services/filter-plannings.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})


export class TopBarComponent {
  @Input() backable: boolean = false
  planningsTypes: PlanningType[] = [];
  planningsThemes: PlanningTheme[] = [];
  dates: Date[] = [];

  constructor(private navigation: NavigationService, private _bottomSheet: MatBottomSheet, private filterPlannings: FilterPlanningsService) {
    navigation.eventEmitter.on(EventBackArrowVisibility.name, (data: EventBackArrowVisibility) => this.change(data.data))

  }

  back(): void {
    this.navigation.back()
  }

  public change(backable: boolean) {
    this.backable = backable;
  }

  openFilter() {
    const bottomSheetRef = this._bottomSheet.open(FilterMenuComponent, {
      data: {
        planningsTypes: this.planningsTypes,
        planningsThemes: this.planningsThemes,
        dates: this.dates,
      },
    });
    bottomSheetRef.afterDismissed().subscribe(data => {
      this.filterPlannings.eventEmitter.emit(new EventFilterPlanning(new FilterPlanning(this.planningsTypes, this.planningsThemes, this.dates)));
    })
  }
}
