import { Component } from '@angular/core';
import {AppRoutes, toRoute} from "../../app/AppRoutes";

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.sass']
})
export class AdminSideNavComponent {
  talkRoute = toRoute(AppRoutes.ADMIN_TALKS)
  planningRoute = toRoute(AppRoutes.ADMIN_PLANNINGS)
  speakerRoute = toRoute(AppRoutes.ADMIN_SPEAKERS)
  conferenceRoute = toRoute(AppRoutes.ADMIN_CONFERENCES)

}
