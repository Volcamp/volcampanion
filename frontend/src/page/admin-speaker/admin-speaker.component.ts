import { Component } from '@angular/core';
import {VMListSpeaker} from "../../vm/VMListSpeaker";
import {AbstractSpeakerService} from "../../services/abstract/AbstractSpeakerService";
import {AbstractConferenceService} from "../../services/abstract/AbstractConferenceService";

@Component({
  selector: 'app-admin-speaker',
  templateUrl: './admin-speaker.component.html',
  styleUrls: ['./admin-speaker.component.sass']
})
export class AdminSpeakerComponent {
  vm: VMListSpeaker

  constructor(dataService: AbstractSpeakerService, confService: AbstractConferenceService) {
    this.vm = new VMListSpeaker(dataService, confService);
  }

  ngOnInit(): void {
    this.vm.init();

  }

}
