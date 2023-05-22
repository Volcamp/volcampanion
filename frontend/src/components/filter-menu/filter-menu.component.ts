import {Component, Inject} from '@angular/core';
import {PlanningType} from "../../data/dto/Planning";
import {PlanningTheme} from "../../data/dto/Theme";
import {compareEqualDate, formatDate} from "../../common/DateFunc";
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {AbstractThemeService} from "../../services/AbstractThemeService";
import {AbstractFormatService} from "../../services/AbstractFormatService";

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.sass']
})
export class FilterMenuComponent {
  planningsType: PlanningType[] = []
  planningsTheme: PlanningTheme[] = []
  datesConference: Date[] = []

  planningsTypeSelected: PlanningType[] = []
  planningsThemeSelected: PlanningTheme[] = []
  dateSelected: Date[] = []

  constructor(private conferenceService: AbstractConferenceService, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any, private themeService: AbstractThemeService, private formatService: AbstractFormatService) {
    this.planningsTypeSelected = data.planningsTypes;
    this.planningsThemeSelected = data.planningsThemes;
    this.dateSelected = data.dates;

    formatService.getFormats().subscribe(data => {
      this.planningsType = data.map(format => format.type)
      this.planningsType.splice(this.planningsType.indexOf(PlanningType.BREAK), this.planningsType.lastIndexOf(PlanningType.BREAK) + 1);
      this.planningsType = this.planningsType.filter((item, index) => this.planningsType.indexOf(item) === index)

    })


    themeService.getThemes().subscribe(data => {
      this.planningsTheme = data.map(theme => theme.name);
    })

    conferenceService.getCurrentConference().subscribe(conference => {
      const startDate = conference!.startDate ? new Date(conference!.startDate) : null;
      const endDate = conference!.endDate ? new Date(conference!.endDate) : null;

      if (!startDate || !endDate) {
        this.datesConference = [];
      } else {
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
          this.datesConference.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    });
  }

  selectOption(option: any, selectedOptions: any[]) {
    const index = selectedOptions.indexOf(option);
    if (index >= 0) {
      selectedOptions.splice(index, 1);
    } else {
      selectedOptions.push(option);
    }
  }

  selectDate(date: Date) {
    const dateBool = this.dateSelected.some(d => compareEqualDate(d, date));
    if (dateBool) {
      const dateInList = this.dateSelected.find(d => compareEqualDate(d, date));
      // @ts-ignore
      this.dateSelected.splice(this.dateSelected.indexOf(dateInList), 1);
    } else {
      this.dateSelected.push(date);
    }
  }

  isDateSelected(date: Date) {
    return this.dateSelected.some(d => compareEqualDate(d, date));
  }

  formatDate(date: Date): string {
    return formatDate(date)
  }
}
