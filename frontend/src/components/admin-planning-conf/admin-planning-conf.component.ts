import {Component} from '@angular/core';
import {Conference} from "../../data/dto/input/Conference";
import {map, Observable, of} from "rxjs";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {AbstractPlanningService} from "../../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {compareEqualDate} from "../../common/DateFunc";
import {AbstractTalkService} from "../../services/abstract/AbstractTalkService";
import {Talk} from "../../data/dto/input/Talk";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";
import {CalendarEvent} from "angular-calendar";
import {CalendarTalkMapper} from "../../common/Calandar/Mappers/CalendarTalkMapper";

@Component({
  selector: 'app-admin-planning-conf',
  templateUrl: './admin-planning-conf.component.html',
  styleUrls: ['./admin-planning-conf.component.sass']
})
export class AdminPlanningConfComponent {
  conf!: Conference;
  plannings: Observable<Planning[]> = of([]);
  dates: Date[] = [];
  talks: Observable<CalendarEvent<Talk>[]> = of([]);

  constructor(private abstractPlanningService: AbstractPlanningService, private abstractConferenceService: AbstractConferenceService,
              private abstractTalkService: AbstractTalkService) {
    abstractConferenceService.getCurrentConference().subscribe(conf => {
      this.conf = conf;
      // @ts-ignore
      this.conf.startDate = new Date(this.conf.startDate); // this.conf.startDate : string // for some reason :(
      // @ts-ignore
      this.conf.endDate = new Date(this.conf.endDate);

      this.plannings = abstractPlanningService.getPlannings(conf.id.toString());

      this.plannings.subscribe(plannings => {
        abstractTalkService.getTalks(conf.id.toString()).subscribe(talks => {
          talks.forEach(talk => {
            this.talks.subscribe(talks => {
              talks.push(CalendarTalkMapper.toCalendar(talk));
            });
          });
        });
      });

      if (!this.conf.startDate || !this.conf.endDate) {
        this.dates = [];
      } else {
        const currentDate = new Date(this.conf.startDate);
        while (currentDate <= this.conf.endDate) {
          this.dates.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    })

  }


  convertPlanning(date: Date): Observable<Planning[]> {
    return this.plannings.pipe(map(plannings => {
      return plannings.filter(planning => {
        return compareEqualDate(planning.schedule, date);
      });
    }))
  }

}
