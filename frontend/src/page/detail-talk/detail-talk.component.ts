import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../../data/services-datas/DataService";
import {getColorTheme, getIconFormat} from "../../general-volcamp/ColorThemeAndTypeEmoji";
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/navigation.service";
import {Speaker} from "../../data/dto/Speaker";
import {AppRoutes, toRoute} from "../../app/AppRoutes";
import {TalkPlanning} from "../../data/dto/TalkPlanning";

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

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const talkIdFromRoute = Number(routeParams.get('talkId'));

    if ((this.talkPlanning === undefined) || this.talkPlanning?.talk === undefined) {
      this.dataService.getTalkById(talkIdFromRoute).subscribe(talkPlanning => {
        this.talkPlanning = talkPlanning;
        this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name);
        this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type);
      })
    } else if (this.talkPlanning!.talk.id !== talkIdFromRoute) {
      this.dataService.getTalkById(talkIdFromRoute).subscribe(talkPlanning => {
        this.talkPlanning = talkPlanning;
        this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name);
        this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type);
      })
    } else {
      this.colorTheme = getColorTheme(this.talkPlanning!.talk!.theme!.name)
      this.iconFormat = getIconFormat(this.talkPlanning!.talk!.format!.type)
    }

    console.log(this.talkPlanning?.talk.speakers)


  }

  navigate(speaker: Speaker) {
    this.navigation.goToSpeaker(speaker)
  }
}
