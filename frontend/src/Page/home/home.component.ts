import {Component} from '@angular/core';
import {DataService} from "../../Data/ServicesDatas/DataService";
import {Planning} from "../../Data/DTO/Planning";
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";
import {Speaker} from "../../Data/DTO/Speaker";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  plans!: Planning[]
  speakers!: Speaker[]

  constructor( dataService: DataService) {
    dataService.providePlans().then((plans) => this.plans = plans.sort(compareSchedule))

    dataService.provideSpeakers().then((speakers) => this.speakers = speakers)

  }
}
