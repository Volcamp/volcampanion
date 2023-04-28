import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {AppRootes, toRoot} from "../app/AppRootes";
import {Speaker} from "../Data/DTO/Speaker";
import {DataParamService} from "./data-param.service";
import {TalkPlan} from "../Data/DTO/TalkPlan";

@Injectable({
  providedIn: 'root'
})


export class NavigationService {

  private history: string[] = [];

  constructor(private router: Router, private location: Location, private dataParam : DataParamService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  goTo(link : string) : void{
    this.router.navigate([link]);

  }

  goToSpeaker(speaker : Speaker) : void{
    this.dataParam.storageParam =speaker
    this.goTo( toRoot(AppRootes.DETAIL_SPEAKER_ROUTE)+speaker.id );

  }

  goToTalk(talkPlan : TalkPlan) : void{
    this.dataParam.storageParam =talkPlan
    this.goTo( toRoot(AppRootes.DETAIL_TALK_ROUTE)+talkPlan.talk.id );
  }
}
