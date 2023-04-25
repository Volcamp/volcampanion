import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../Page/home/home.component";
import {SpeakerPageComponent} from "../Page/speaker-page/speaker-page.component";
import {AppRootes} from "./AppRootes";

const routes: Routes = [
  {component: HomeComponent, path: AppRootes.HOME_ROUTE},
  {component: SpeakerPageComponent, path: AppRootes.SPEAKER_ROUTE},
  {pathMatch: "full", redirectTo: AppRootes.HOME_ROUTE, path: ""},
  {pathMatch: "full", redirectTo: AppRootes.HOME_ROUTE, path: "**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
