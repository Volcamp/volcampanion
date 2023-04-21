import {Component, Inject} from '@angular/core';
import {DataService} from "../../Data/ServicesDatas/DataService";
import {Plan} from "../../Data/DTO/Plan";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  num=5
  plans:Plan[]

  constructor( /*@Inject( DataService )*/ dataService: DataService ) {
    this.plans=dataService.providePlansList()

  }
}
