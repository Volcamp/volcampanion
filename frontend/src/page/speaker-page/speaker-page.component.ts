import {Component, OnInit} from '@angular/core';
import {Speaker} from "../../data/dto/Speaker";
import {AbstractSpeakerService} from "../../services/AbstractSpeakerService";
import {AbstractConferenceService} from "../../services/AbstractConferenceService";

@Component({
  selector: 'app-speaker-page',
  templateUrl: './speaker-page.component.html',
  styleUrls: ['./speaker-page.component.sass']
})
export class SpeakerPageComponent implements OnInit {
  speakers!: Speaker[]

  constructor(private dataService: AbstractSpeakerService, private confService: AbstractConferenceService) {
  }

  ngOnInit(): void {
    this.confService.getCurrentConference().subscribe(conf => {
        this.dataService.getSpeakers(conf!.id.toString()).subscribe((speakers => this.speakers = speakers))
      }
    );
  }
}
