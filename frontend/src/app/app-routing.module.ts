import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../page/home/home.component";
import {SpeakerPageComponent} from "../page/speaker-page/speaker-page.component";
import {AppRoutes} from "./AppRoutes";
import {DetailTalkComponent} from "../page/detail-talk/detail-talk.component";
import {DetailSpeakerComponent} from "../page/detail-speaker/detail-speaker.component";
import {NotFoundComponent} from "../page/not-found-page/not-found/not-found.component";
import {FavoriteComponent} from "../page/favorite/favorite.component";
import {UserService} from "../services/UserService";
import {AdminPlanningsComponent} from "../page/admin-plannings/admin-plannings.component";
import {AdminTalksComponent} from "../page/admin-talks/admin-talks.component";
import {AdminSpeakerComponent} from "../page/admin-speaker/admin-speaker.component";


function isLogged(): boolean {
  return inject(UserService).isLogged();
}

function isAdmin(): boolean {
  return inject(UserService).isAdmin();
}

const routes: Routes = [
  {component: HomeComponent, path: AppRoutes.HOME_ROUTE},
  {component: NotFoundComponent, path: AppRoutes.NOT_FOUND},
  {component: SpeakerPageComponent, path: AppRoutes.SPEAKER_ROUTE},
  {component: DetailTalkComponent, path: AppRoutes.DETAIL_TALK_ROUTE},
  {component: DetailSpeakerComponent, path: AppRoutes.DETAIL_SPEAKER_ROUTE},
  {component: FavoriteComponent, path: AppRoutes.FAVORITE_ROUTE, canActivate: [() => isLogged()]},
  {component: AdminPlanningsComponent, path: AppRoutes.ADMIN_PLANNINGS, canActivate: [() => isAdmin()]},
  {component: AdminTalksComponent, path: AppRoutes.ADMIN_TALKS, canActivate: [() => isAdmin()]},
  {component: AdminSpeakerComponent, path: AppRoutes.ADMIN_SPEAKERS, canActivate: [() => isAdmin()]},
  {pathMatch: "full", redirectTo: AppRoutes.HOME_ROUTE, path: ""},
  {pathMatch: "full", redirectTo: AppRoutes.NOT_FOUND, path: "**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


