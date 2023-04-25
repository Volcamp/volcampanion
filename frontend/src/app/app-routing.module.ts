import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../Page/home/home.component";
import {SpeakerPageComponent} from "../Page/speaker-page/speaker-page.component";

const routes: Routes = [
  {component: HomeComponent, path: "home"},
  {component: SpeakerPageComponent, path: "speakers"},
  {pathMatch: "full",redirectTo:"home", path: ""},
  {pathMatch: "full",redirectTo:"home", path: "**"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
