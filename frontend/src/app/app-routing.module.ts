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
import {switchAdminTheme, switchUserTheme} from "../common/Theme";
import {AdminConferencesComponent} from "../page/admin-conferences/admin-conferences.component";
import {InfosComponent} from "../page/infos/infos.component";


function isLogged(): boolean {
  switchUserTheme();
  return inject(UserService).isLogged();
}

function isAdmin(): boolean {
  switchAdminTheme();
  return inject(UserService).isAdmin();
}

function user(): boolean {
  switchUserTheme();
  return true;
}

const routes: Routes = [
  {component: HomeComponent, path: AppRoutes.HOME_ROUTE, canActivate: [() => user()]},
  {component: InfosComponent, path: AppRoutes.INFOS_ROUTE, canActivate: [() => user()]},
  {component: NotFoundComponent, path: AppRoutes.NOT_FOUND, canActivate: [() => user()]},
  {component: SpeakerPageComponent, path: AppRoutes.SPEAKER_ROUTE, canActivate: [() => user()]},
  {component: DetailTalkComponent, path: AppRoutes.DETAIL_TALK_ROUTE, canActivate: [() => user()]},
  {component: DetailSpeakerComponent, path: AppRoutes.DETAIL_SPEAKER_ROUTE, canActivate: [() => user()]},
  {component: FavoriteComponent, path: AppRoutes.FAVORITE_ROUTE, canActivate: [() => user()]},
  {component: AdminConferencesComponent, path: AppRoutes.ADMIN_CONFERENCES, canActivate: [() => isAdmin()]},
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


