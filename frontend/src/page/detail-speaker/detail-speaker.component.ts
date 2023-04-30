import {Component, OnInit} from '@angular/core';
import {Speaker} from "../../data/dto/Speaker";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../data/services-datas/DataService";
import {DataParamService} from "../../services/data-param.service";
import {SocialMedia} from "../../general-volcamp/SocialMedia";

@Component({
  selector: 'app-detail-speaker',
  templateUrl: './detail-speaker.component.html',
  styleUrls: ['./detail-speaker.component.sass']
})
export class DetailSpeakerComponent implements OnInit {
  speaker: Speaker | null | undefined = null
  twitter = SocialMedia.TWITTER
  linkedin = SocialMedia.LINKEDIN

  constructor(private route: ActivatedRoute, private dataService: DataService, private dataParamService: DataParamService) {
    this.speaker = dataParamService.storageParam

  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const speakerIdFromRoute = Number(routeParams.get('speakerId'));

    if ((this.speaker === undefined)) {
      this.dataService.getSpeakerById(speakerIdFromRoute).subscribe(speaker => this.speaker = speaker)
    } else if (this.speaker!.id !== speakerIdFromRoute) {
      this.dataService.getSpeakerById(speakerIdFromRoute).subscribe(speaker => this.speaker = speaker)
    }
  }
}
