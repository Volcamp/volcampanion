import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../Data/ServicesDatas/DataService";
import {getColorTheme, getIconFormat} from "../../GeneralVolcamp/ColorThemeAndTypeEmoji";
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/navigation.service";
import {Speaker} from "../../Data/DTO/Speaker";
import {AppRoutes, toRoute} from "../../app/AppRoutes";
import {TalkPlanning} from "../../Data/DTO/TalkPlanning";

@Component({
  selector: 'app-detail-talk',
  templateUrl: './detail-talk.component.html',
  styleUrls: ['./detail-talk.component.sass']
})
export class DetailTalkComponent implements OnInit {
  talkPlanning: TalkPlanning | undefined | null = null
  colorTheme: string = "";
  iconFormat: string = ""
  detailRoute = toRoute(AppRoutes.DETAIL_SPEAKER_ROUTE);

  constructor(private route: ActivatedRoute, private dataService: DataService, private dataParamService: DataParamService, private navigation: NavigationService) {
    this.talkPlanning = dataParamService.storageParam

  }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const talkIdFromRoute = Number(routeParams.get('talkId'));

    if ((this.talkPlanning === undefined) || this.talkPlanning?.talk === undefined) {
      this.talkPlanning = await this.dataService.getTalkById(talkIdFromRoute)
    } else if (this.talkPlanning!.talk.id !== talkIdFromRoute) {
      this.talkPlanning = await this.dataService.getTalkById(talkIdFromRoute)
    }

    this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name)
    this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type)
  }

  navigate(speaker: Speaker) {
    this.navigation.goToSpeaker(speaker)
  }
}
