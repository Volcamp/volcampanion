import {Component} from '@angular/core';
import {Speaker} from "../../Data/DTO/Speaker";
import {DataService} from "../../Data/ServicesDatas/DataService";

@Component({
  selector: 'app-speaker-page',
  templateUrl: './speaker-page.component.html',
  styleUrls: ['./speaker-page.component.sass']
})
export class SpeakerPageComponent {
  speakers!: Speaker[]

  constructor(dataService: DataService) {
    dataService.provideSpeakers().then((speakers) => this.speakers = speakers)
  }
}
