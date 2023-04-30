import {Component, Inject} from '@angular/core';
import {PlanningType} from "../../data/dto/Planning";
import {PlanningTheme} from "../../data/dto/Theme";
import {CurrentConferenceService} from "../../data/services-datas/api-datas/current-conference.service";
import {compareEqualDate, formatDate} from "../../general-volcamp/DateFunc";
import {FilterPlanningsService} from "../../services/filter-plannings.service";
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.sass']
})
export class FilterMenuComponent {
  planningsType: PlanningType[]
  planningsTheme: PlanningTheme[]
  datesConference: Date[] = []

  planningsTypeSelected: PlanningType[] = []
  planningsThemeSelected: PlanningTheme[] = []
  dateSelected: Date[] = []

  constructor(private conferenceService: CurrentConferenceService,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.planningsTypeSelected = data.planningsTypes;
    this.planningsThemeSelected = data.planningsThemes;
    this.dateSelected = data.dates;

    // @ts-ignore
    this.planningsType = Object.keys(PlanningType).map(key => PlanningType[key]).filter(k => !(parseInt(k) >= 0));
    this.planningsType.splice(this.planningsType.indexOf(PlanningType.BREAK), 1);
    this.planningsType.splice(this.planningsType.indexOf(PlanningType.DELIMITER_DAY), 1);

    // @ts-ignore
    this.planningsTheme = Object.keys(PlanningTheme).map(key => PlanningTheme[key]).filter(k => !(parseInt(k) >= 0));

    conferenceService.getActiveId().subscribe(conference => {
      const startDate = conference.startDate ? new Date(conference.startDate) : null;
      const endDate = conference.endDate ? new Date(conference.endDate) : null;

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
