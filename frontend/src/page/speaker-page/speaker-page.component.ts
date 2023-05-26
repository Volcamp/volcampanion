import {Component, OnInit} from '@angular/core';
import {AbstractSpeakerService} from "../../services/abstract/AbstractSpeakerService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";
import {VMListSpeaker} from "../../vm/VMListSpeaker";

@Component({
  selector: 'app-speaker-page',
  templateUrl: './speaker-page.component.html',
  styleUrls: ['./speaker-page.component.sass']
})
export class SpeakerPageComponent implements OnInit {
  vm: VMListSpeaker

  constructor(dataService: AbstractSpeakerService, confService: AbstractConferenceService) {
    this.vm = new VMListSpeaker(dataService, confService);
  }

  ngOnInit(): void {
    this.vm.init();

  }
}
