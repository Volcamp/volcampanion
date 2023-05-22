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

const routes: Routes = [
  {component: HomeComponent, path: AppRoutes.HOME_ROUTE},
  {component: NotFoundComponent, path: AppRoutes.NOT_FOUND},
  {component: SpeakerPageComponent, path: AppRoutes.SPEAKER_ROUTE},
  {component: DetailTalkComponent, path: AppRoutes.DETAIL_TALK_ROUTE},
  {component: DetailSpeakerComponent, path: AppRoutes.DETAIL_SPEAKER_ROUTE},
  {component: FavoriteComponent, path: AppRoutes.FAVORITE_ROUTE, canActivate: [() => inject(UserService).isLogged()]},
  {pathMatch: "full", redirectTo: AppRoutes.HOME_ROUTE, path: ""},
  {pathMatch: "full", redirectTo: AppRoutes.NOT_FOUND, path: "**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
