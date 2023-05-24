import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Speaker} from "../data/dto/input/Speaker";
import {AppRoutes, toRoute, toRouteById} from "../app/AppRoutes";
import {TalkPlanning} from "../data/dto/input/TalkPlanning";
import {EventEmitter} from "../event/EventEmitter";
import {BackArrowVisibilityEventArgs} from "../event/BackArrowVisibilityEventArgs";
import {FilterVisibilityEventArgs} from "../event/FilterVisibilityEventArgs";
import {BackArrowVisibilityEvent} from "../event/BackArrowVisibilityEvent";
import {FilterVisibilityEvent} from "../event/FilterVisibilityEvent";
import {DataParamService} from "./DataParamService";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private history: string[] = [];
  backArrowEventEmitter = new EventEmitter<BackArrowVisibilityEvent>(BackArrowVisibilityEvent);
  filterVisibilityEventEmitter = new EventEmitter<FilterVisibilityEvent>(FilterVisibilityEvent);

  constructor(private router: Router, private location: Location, private dataParam: DataParamService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);

        this.backArrowEventEmitter.emit(new BackArrowVisibilityEventArgs(this.router.url.slice(1).includes("/")));
        this.filterVisibilityEventEmitter.emit(new FilterVisibilityEventArgs(this.router.url.includes(AppRoutes.HOME_ROUTE) || this.router.url.includes(AppRoutes.FAVORITE_ROUTE)));
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
    this.dataParam.storageParam = talkPlanning.talk;
    this.goTo(toRouteById(AppRoutes.DETAIL_TALK_ROUTE, talkPlanning.talk.id.toString()));
  }
}
