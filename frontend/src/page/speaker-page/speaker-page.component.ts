import {Component, OnInit} from '@angular/core';
import {AbstractSpeakerService} from "../../services/AbstractSpeakerService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";
import {VMListSpeaker} from "../../data/vm/VMListSpeaker";

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
