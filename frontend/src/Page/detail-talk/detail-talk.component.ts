import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../Data/ServicesDatas/DataService";
import {TalkPlan} from "../../Data/DTO/TalkPlan";
import {getColorTheme, getIconFormat} from "../../GeneralVolcamp/ColorThemeAndTypeEmoji";
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/navigation.service";
import {Speaker} from "../../Data/DTO/Speaker";
import {AppRoutes, toRoute} from "../../app/AppRoutes";

@Component({
  selector: 'app-detail-talk',
  templateUrl: './detail-talk.component.html',
  styleUrls: ['./detail-talk.component.sass']
})
export class DetailTalkComponent implements OnInit {
  talkPlan: TalkPlan | undefined | null = null
  colorTheme: string = "";
  iconFormat: string = ""
  detailRoute = toRoute(AppRoutes.DETAIL_SPEAKER_ROUTE);

  constructor(private route: ActivatedRoute, private dataService: DataService, private dataParamService: DataParamService,private navgation: NavigationService) {
    this.talkPlan = dataParamService.storageParam

  }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const talkIdFromRoute = Number(routeParams.get('talkId'));

    if ((this.talkPlan === undefined) || this.talkPlan?.talk === undefined) {
      this.talkPlan = await this.dataService.getTalkById(talkIdFromRoute)
    } else if (this.talkPlan!.talk.id != talkIdFromRoute) {
      this.talkPlan = await this.dataService.getTalkById(talkIdFromRoute)
    }

    this.colorTheme = getColorTheme(this.talkPlan!.talk.theme.name)
    this.iconFormat = getIconFormat(this.talkPlan!.talk.format.type)
  }

  navigate(speaker: Speaker) {
    this.navgation.goToSpeaker(speaker)
  }
}
