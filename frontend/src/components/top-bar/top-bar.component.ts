import {Component, Input} from '@angular/core';
import {NavigationService} from "../../services/NavigationService";
import {BackArrowVisibilityEventArgs} from "../../event/BackArrowVisibilityEventArgs";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {FilterMenuComponent} from "../filter-menu/filter-menu.component";
import {PlanningType} from "../../data/dto/Planning";
import {PlanningTheme} from "../../data/dto/Theme";
import {FilterPlanningEventArgs} from "../../event/FilterPlanningEventArgs";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {FilterVisibilityEventArgs} from "../../event/FilterVisibilityEventArgs";
import {AppRoutes, toRoute} from "../../app/AppRoutes";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent {
  @Input() isMobile!: boolean;


  homeRoute = toRoute(AppRoutes.HOME_ROUTE)
  speakerRoute = toRoute(AppRoutes.SPEAKER_ROUTE)
  favoriteRoute = toRoute(AppRoutes.FAVORITE_ROUTE)

  backable: boolean = false;
  filterable: boolean = true;

  planningsTypes: PlanningType[] = [];
  planningsThemes: PlanningTheme[] = [];
  dates: Date[] = [];

  constructor(private navigation: NavigationService, private _bottomSheet: MatBottomSheet, private filterPlannings: FilterPlanningsService) {
    navigation.backArrowEventEmitter.on((data: BackArrowVisibilityEventArgs) => this.changeBackArrow(data.IsVisible))
    navigation.filterVisibilityEventEmitter.on((data: FilterVisibilityEventArgs) => this.changeFilter(data.IsVisible))
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
      this.filterPlannings.eventEmitter.emit(new FilterPlanningEventArgs(this.planningsTypes, this.planningsThemes, this.dates));
    })
  }

}
