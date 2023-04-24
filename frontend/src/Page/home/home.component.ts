import {Component} from '@angular/core';
import {DataService} from "../../Data/ServicesDatas/DataService";
import {Planning} from "../../Data/DTO/Planning";
import {compareSchedule} from "../../GeneralVolcamp/CompareTalkPlan";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  num = 5
  plans!: Planning[]

  constructor( /*@Inject( DataService )*/ dataService: DataService) {
    dataService.providePlans().then((plans) => this.plans = plans.sort(compareSchedule))

  }
}
