import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../Page/home/home.component";
import {SpeakerPageComponent} from "../Page/speaker-page/speaker-page.component";
import {HOME_ROUTE, SPEAKER_ROUTE} from "./ConstRouterPath";

const routes: Routes = [
  {component: HomeComponent, path: HOME_ROUTE},
  {component: SpeakerPageComponent, path: SPEAKER_ROUTE},
  {pathMatch: "full",redirectTo:HOME_ROUTE, path: ""},
  {pathMatch: "full",redirectTo:HOME_ROUTE, path: "**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
