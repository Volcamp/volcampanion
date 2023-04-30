import {Component, OnInit} from '@angular/core';
import {Speaker} from "../../data/dto/Speaker";
import {DataService} from "../../data/services-datas/DataService";
import {CurrentConferenceService} from "../../data/services-datas/api-datas/current-conference.service";

@Component({
  selector: 'app-speaker-page',
  templateUrl: './speaker-page.component.html',
  styleUrls: ['./speaker-page.component.sass']
})
export class SpeakerPageComponent implements OnInit {
  speakers!: Speaker[]

  constructor(private dataService: DataService, private confService: CurrentConferenceService) {
  }

  ngOnInit(): void {
    this.confService.getActiveId().subscribe(conf => {
        this.dataService.provideSpeakers(conf.id.toString()).subscribe((speakers => this.speakers = speakers))
      }
    );
  }
}
