import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HomeComponent} from "../Page/home/home.component";
import {BottomNavBarComponent} from "../Components/bottom-nav-bar/bottom-nav-bar.component";
import {TopBarComponent} from "../Components/top-bar/top-bar.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TalkTeaserViewComponent} from "../Components/talk-teaser-view/talk-teaser-view.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {TalksListComponent} from "../Components/talks-list/talks-list.component";
import {MatDividerModule} from "@angular/material/divider";
import {BreakTeaserViewComponent} from "../Components/break-teaser-view/break-teaser-view.component";
import {DividerTeaserViewComponent} from "../Components/divider-teaser-view/divider-teaser-view.component";
import {DataService} from "../Data/ServicesDatas/DataService";
import {StubService} from "../Data/ServicesDatas/StubDatas/StubService";
import {SpeakerTeaserViewComponent} from "../Components/speaker-teaser-view/speaker-teaser-view.component";
import {SpeakersListComponent} from "../Components/speakers-list/speakers-list.component";
import {SpeakerPageComponent} from "../Page/speaker-page/speaker-page.component";
import {AddFavoriteComponent} from "../Components/add-favorite/add-favorite.component";
import {DetailTalkComponent} from "../Page/detail-talk/detail-talk.component";
import {SpeakerPreviewComponent} from "../Components/speaker-preview/speaker-preview.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DetailSpeakerComponent} from "../Page/detail-speaker/detail-speaker.component";
import {DataParamService} from "../services/data-param.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomNavBarComponent,
    TopBarComponent,
    TalkTeaserViewComponent,
    TalksListComponent,
    BreakTeaserViewComponent,
    DividerTeaserViewComponent,
    SpeakerTeaserViewComponent,
    SpeakersListComponent,
    SpeakerPageComponent,
    AddFavoriteComponent,
    DetailTalkComponent,
    SpeakerPreviewComponent,
    DetailSpeakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressSpinnerModule,

  ],
  providers: [{
    provide: DataService,
    useClass: StubService // <--- Defining the swappable implementation.
  },
    DataParamService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
