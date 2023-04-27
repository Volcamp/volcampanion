import { Component } from '@angular/core';
import {Planning} from "../../Data/DTO/Planning";
import {Speaker} from "../../Data/DTO/Speaker";
import {DataService} from "../../Data/ServicesDatas/DataService";
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";

@Component({
  selector: 'app-speaker-page',
  templateUrl: './speaker-page.component.html',
  styleUrls: ['./speaker-page.component.sass']
})
export class SpeakerPageComponent {
  speakers!: Speaker[]

  constructor( dataService: DataService) {
    dataService.provideSpeakers().then((speakers) => this.speakers = speakers)

  }
}
