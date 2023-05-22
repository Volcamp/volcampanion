import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataParamService} from "../../services/data-param.service";
import {AbstractSpeakerService} from "../../services/AbstractSpeakerService";
import {VMSpeaker} from "../../data/vm/VMSpeaker";

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
