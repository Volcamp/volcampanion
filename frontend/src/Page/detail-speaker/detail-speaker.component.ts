import {Component, OnInit} from '@angular/core';
import {Speaker} from "../../Data/DTO/Speaker";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../Data/ServicesDatas/DataService";
import {DataParamService} from "../../services/data-param.service";

@Component({
  selector: 'app-detail-speaker',
  templateUrl: './detail-speaker.component.html',
  styleUrls: ['./detail-speaker.component.sass']
})
export class DetailSpeakerComponent implements OnInit{
  speaker: Speaker | null | undefined = null


  constructor(private route: ActivatedRoute, private dataService: DataService, private dataParamService: DataParamService) {
    this.speaker = dataParamService.storageParam
  }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const speakerIdFromRoute = Number(routeParams.get('speakerId'));

    if ((this.speaker === undefined)) {
      this.speaker = await this.dataService.getSpeakerById(speakerIdFromRoute)
    } else if (this.speaker!.id != speakerIdFromRoute) {
      this.speaker = await this.dataService.getSpeakerById(speakerIdFromRoute)
    }
  }
}
