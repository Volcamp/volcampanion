import {Component} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {EventBackArrowVisibility} from "../../event/EventBackArrowVisibility";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {FilterMenuComponent} from "../filter-menu/filter-menu.component";
import {PlanningType} from "../../data/dto/Planning";
import {PlanningTheme} from "../../data/dto/Theme";
import {EventFilterPlanning, FilterPlanning} from "../../event/EventFilterPlanning";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {EventFilterVisibility} from "../../event/EventFilterVisibility";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})


export class TopBarComponent {
  backable: boolean = false;
  filterable: boolean = true;

  planningsTypes: PlanningType[] = [];
  planningsThemes: PlanningTheme[] = [];
  dates: Date[] = [];

  constructor(private navigation: NavigationService, private _bottomSheet: MatBottomSheet, private filterPlannings: FilterPlanningsService) {
    navigation.eventEmitter.on(EventBackArrowVisibility.name, (data: EventBackArrowVisibility) => this.changeBackArrow(data.data))
    navigation.eventEmitter.on(EventFilterVisibility.name, (data: EventFilterVisibility) => this.changeFilter(data.data))

  }

  back(): void {
    this.navigation.back()
  }

  public changeBackArrow(backable: boolean) {
    this.backable = backable;
  }

  public changeFilter(filterable: boolean) {
    this.filterable = filterable;
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
