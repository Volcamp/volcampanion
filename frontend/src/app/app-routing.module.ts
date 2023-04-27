import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../Page/home/home.component";
import {SpeakerPageComponent} from "../Page/speaker-page/speaker-page.component";
import {AppRoUtes} from "./AppRoUtes";

const routes: Routes = [
  {component: HomeComponent, path: AppRoUtes.HOME_ROUTE},
  {component: SpeakerPageComponent, path: AppRoUtes.SPEAKER_ROUTE},
  {pathMatch: "full", redirectTo: AppRoUtes.HOME_ROUTE, path: ""},
  {pathMatch: "full", redirectTo: AppRoUtes.HOME_ROUTE, path: "**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
