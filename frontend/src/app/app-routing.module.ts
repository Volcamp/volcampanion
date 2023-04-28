import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../Page/home/home.component";
import {SpeakerPageComponent} from "../Page/speaker-page/speaker-page.component";
import {AppRoutes} from "./AppRoutes";
import {DetailTalkComponent} from "../Page/detail-talk/detail-talk.component";
import {DetailSpeakerComponent} from "../Page/detail-speaker/detail-speaker.component";

const routes: Routes = [
  {component: HomeComponent, path: AppRoutes.HOME_ROUTE},
  {component: SpeakerPageComponent, path: AppRoutes.SPEAKER_ROUTE},
  {component: DetailTalkComponent, path: AppRoutes.DETAIL_TALK_ROUTE},
  {component: DetailTalkComponent, path: AppRoutes.DETAIL_TALK_ROUTE},
  {component: DetailSpeakerComponent, path: AppRoutes.DETAIL_SPEAKER_ROUTE},
  {pathMatch: "full", redirectTo: AppRoutes.HOME_ROUTE, path: "**"},
  {pathMatch: "full", redirectTo: AppRoutes.HOME_ROUTE, path: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
