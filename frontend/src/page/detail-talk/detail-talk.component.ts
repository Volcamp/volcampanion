import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavigationService} from "../../services/NavigationService";
import {Speaker} from "../../data/dto/input/Speaker";
import {AbstractTalkService} from "../../services/abstract/AbstractTalkService";
import {VMTalk} from "../../vm/VMTalk";
import {DataParamService} from "../../services/DataParamService";
import {VolcampFeedbackComponent} from "../../components/volcamp-feedback/volcamp-feedback.component";
import {FeedbackInitService} from "../../services/FeedbackInitService";
import {UserService} from "../../services/UserService";

@Component({
  selector: 'app-detail-talk',
  templateUrl: './detail-talk.component.html',
  styleUrls: ['./detail-talk.component.sass']
})
export class DetailTalkComponent implements OnInit {
  vm: VMTalk;

  constructor(route: ActivatedRoute, dataService: AbstractTalkService, dataParamService: DataParamService,
              private navigation: NavigationService, feedbackInitService: FeedbackInitService) {
    this.vm = new VMTalk(route, dataService, dataParamService,feedbackInitService);
  }

  ngOnInit() {
    this.vm.init();
  }

  navigate(speaker: Speaker) {
    this.navigation.goToSpeaker(speaker)
  }
}
