import {Component, QueryList, ViewChildren} from '@angular/core';
import {Conference} from "../../data/dto/input/Conference";
import {map, Observable, of} from "rxjs";
import {Planning, PlanningType} from "../../data/dto/input/Planning";
import {AbstractPlanningService} from "../../services/abstract/AbstractPlanningService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {compareEqualDate} from "../../common/DateFunc";
import {AbstractTalkService} from "../../services/abstract/AbstractTalkService";
import {CalendarEvent} from "angular-calendar";
import {CalendarTalkMapper} from "../../common/Calandar/Mappers/CalendarTalkMapper";
import {CalendarTalk} from "../../common/Calandar/CalendarTalk";
import {TalkPlanning} from "../../data/dto/input/TalkPlanning";
import {AdminPlanningDateComponent} from "../admin-planning-date/admin-planning-date.component";
import {PlanningMapper} from "../../data/dto/output/mappers/PlanningMapper";
import {SnackBarService} from "../../services/SnackBarService";

export const PLANNING_CALENDAR = "planningCalendar"

@Component({
  selector: 'app-admin-planning-conf',
  templateUrl: './admin-planning-conf.component.html',
  styleUrls: ['./admin-planning-conf.component.sass']
})
export class AdminPlanningConfComponent {
  conf!: Conference;
  plannings: Observable<Planning[]> = of([]);
  dates: Date[] = [];
  talks: Observable<CalendarEvent<CalendarTalk>[]> = of([]);
  @ViewChildren(AdminPlanningDateComponent) planningDates!: QueryList<AdminPlanningDateComponent>;


  constructor(private abstractPlanningService: AbstractPlanningService, private abstractConferenceService: AbstractConferenceService,
              private abstractTalkService: AbstractTalkService, private snackBarService: SnackBarService) {
    abstractConferenceService.getCurrentConference().subscribe(conf => {
      this.conf = conf;
      // @ts-ignore
      this.conf.startDate = new Date(this.conf.startDate); // this.conf.startDate : string // for some reason :(
      // @ts-ignore
      this.conf.endDate = new Date(this.conf.endDate);

      this.setPlanning();

      this.plannings.subscribe(plannings => {
        abstractTalkService.getTalks(conf.id.toString()).subscribe(talks => {
          talks.forEach(talk => {
            this.talks.subscribe(talks => {
              if (talk?.format?.type !== PlanningType.DELIMITER_DAY) {
                const occurrence: number = plannings.filter(planning => {
                  if (planning.getType() !== PlanningType.BREAK && planning.getType() != PlanningType.DELIMITER_DAY) {
                    return (planning as TalkPlanning).talk.id == talk.id
                  }
                  return false;
                }).length

                talks.push(CalendarTalkMapper.toCalendar({talk, occurrence}));
              }
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

  collectData(): Planning[] {
    const plannings: Planning[] = []
    this.planningDates.forEach(planningDate => {
      planningDate.planningRooms.forEach(planningRoom => {
        planningRoom.eventsDefault.forEach(planningEvent => {
          plannings.push(planningEvent.meta!);
        });
      });
    });
    return plannings;
  }

  upload() {
    this.abstractPlanningService.replacePlanning(this.collectData()
      .map(elt => {
        var res = elt as TalkPlanning;
        if (res.talk.format.type == PlanningType.BREAK) {
          res.room = null;
        }
        return elt;
      })
      .map(planning => {
        return PlanningMapper.toCreateDTO(planning as TalkPlanning);
      })).subscribe(data => {
      if (data) {
        this.snackBarService.open(`Le planning a été sauvguarder`, 'Fermer')
      } else {
        this.snackBarService.open(`Un probleme a survenue`, "Fermer");
      }
    });
  }

  save() {
    window.localStorage.setItem(PLANNING_CALENDAR, JSON.stringify(this.collectData()));
  }

  delete() {
    window.localStorage.removeItem(PLANNING_CALENDAR);
    window.location.reload();
  }

  private setPlanning() {
    let plannings = window.localStorage.getItem(PLANNING_CALENDAR);
    if (plannings == null) {
      this.plannings = this.abstractPlanningService.getPlannings(this.conf.id.toString());
    } else {
      const planningsAny: any[] = JSON.parse(plannings);
      this.plannings = of(planningsAny.map(planning => {
        return PlanningMapper.toTalkPlanning(planning);
      }))
    }
  }
}
