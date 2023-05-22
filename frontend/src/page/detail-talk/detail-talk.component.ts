import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataParamService} from "../../services/data-param.service";
import {NavigationService} from "../../services/NavigationService";
import {Speaker} from "../../data/dto/Speaker";
import {AbstractTalkService} from "../../services/AbstractTalkService";
import {VMTalk} from "../../data/vm/VMTalk";

@Component({
  selector: 'app-detail-talk',
  templateUrl: './detail-talk.component.html',
  styleUrls: ['./detail-talk.component.sass']
})
export class DetailTalkComponent implements OnInit {
  vm: VMTalk

  constructor(route: ActivatedRoute, dataService: AbstractTalkService, dataParamService: DataParamService,private navigation: NavigationService) {
    this.vm = new VMTalk(route, dataService, dataParamService);
  }

  ngOnInit() {
    this.vm.init();

  }

  navigate(speaker: Speaker) {
    this.navigation.goToSpeaker(speaker)
  }
}
