import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractSpeakerService} from "../../services/abstract/AbstractSpeakerService";
import {VMSpeaker} from "../../vm/VMSpeaker";
import {DataParamService} from "../../services/DataParamService";

@Component({
  selector: 'app-detail-speaker',
  templateUrl: './detail-speaker.component.html',
  styleUrls: ['./detail-speaker.component.sass']
})
export class DetailSpeakerComponent implements OnInit {
  vm: VMSpeaker;

  constructor(route: ActivatedRoute, dataService: AbstractSpeakerService, dataParamService: DataParamService) {
    this.vm = new VMSpeaker(route, dataService, dataParamService);
  }

  ngOnInit() {
    this.vm.init();
  }
}
