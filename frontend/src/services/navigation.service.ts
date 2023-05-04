import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Speaker} from "../Data/DTO/Speaker";
import {DataParamService} from "./data-param.service";
import {AppRoutes, toRoute, toRouteById} from "../app/AppRoutes";
import {TalkPlanning} from "../Data/DTO/TalkPlanning";
import {EventEmitter} from "../event/EventEmitter";
import {EventBackArrowVisibility} from "../event/EventBackArrowVisibility";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = [];
  eventEmitter = new EventEmitter();

  constructor(private router: Router, private location: Location, private dataParam: DataParamService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);

        this.eventEmitter.emit(new EventBackArrowVisibility(this.router.url.slice(1).includes("/")));
      }
    });
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl(toRoute(AppRoutes.ROUTE_PAGE));
    }
  }

  goTo(link: string): void {
    this.router.navigate([link]);


  }

  goToSpeaker(speaker: Speaker): void {
    this.dataParam.storageParam = speaker;
    this.goTo(toRouteById(AppRoutes.DETAIL_SPEAKER_ROUTE, speaker.id.toString()));

  }

  goToTalk(talkPlanning: TalkPlanning): void {
    this.dataParam.storageParam = talkPlanning;
    this.goTo(toRouteById(AppRoutes.DETAIL_TALK_ROUTE, talkPlanning.talk.id.toString()));
  }
}
