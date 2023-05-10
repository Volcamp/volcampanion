import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HomeComponent} from "../page/home/home.component";
import {BottomNavBarComponent} from "../components/bottom-nav-bar/bottom-nav-bar.component";
import {TopBarComponent} from "../components/top-bar/top-bar.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TalkTeaserViewComponent} from "../components/talk-teaser-view/talk-teaser-view.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {TalksListComponent} from "../components/talks-list/talks-list.component";
import {MatDividerModule} from "@angular/material/divider";
import {BreakTeaserViewComponent} from "../components/break-teaser-view/break-teaser-view.component";
import {DividerTeaserViewComponent} from "../components/divider-teaser-view/divider-teaser-view.component";
import {DataService} from "../data/services-datas/DataService";
import {SpeakerTeaserViewComponent} from "../components/speaker-teaser-view/speaker-teaser-view.component";
import {SpeakersListComponent} from "../components/speakers-list/speakers-list.component";
import {SpeakerPageComponent} from "../page/speaker-page/speaker-page.component";
import {AddFavoriteComponent} from "../components/add-favorite/add-favorite.component";
import {DetailTalkComponent} from "../page/detail-talk/detail-talk.component";
import {SpeakerPreviewComponent} from "../components/speaker-preview/speaker-preview.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DetailSpeakerComponent} from "../page/detail-speaker/detail-speaker.component";
import {DataParamService} from "../services/data-param.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiPlanManager} from "../data/services-datas/api-datas/api-managers/ApiPlanManager";
import {ApiSpeakerManager} from "../data/services-datas/api-datas/api-managers/ApiSpeakerManager";
import {RequestManager} from "../data/services-datas/api-datas/api-general/RequestManager";
import {EnvServiceProvider} from "../data/environments/EnvServiceFactory";
import {TwitterBtnComponent} from "../components/twitter-btn/twitter-btn.component";
import {LinkedinBtnComponent} from "../components/linkedin-btn/linkedin-btn.component";
import {StubService} from "../data/services-datas/stub-datas/StubService";
import {FilterMenuComponent} from "../components/filter-menu/filter-menu.component";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatChipsModule} from "@angular/material/chips";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {ApiService} from "../data/services-datas/api-datas/ApiService";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FilterPlanningsService} from "../services/filter-plannings.service";
import {NotFoundComponent} from "../page/not-found-page/not-found/not-found.component";
import {SunComponent} from "../page/not-found-page/sun/sun.component";
import {CloudComponent} from "../page/not-found-page/cloud/cloud.component";
import {AstronautComponent} from "../page/not-found-page/astronaut/astronaut.component";

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
    DetailSpeakerComponent,
    TwitterBtnComponent,
    LinkedinBtnComponent,
    FilterMenuComponent,
    NotFoundComponent,
    SunComponent,
    CloudComponent,
    AstronautComponent,
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
        HttpClientModule,
        MatProgressSpinnerModule,
        MatBottomSheetModule,
        MatChipsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatCheckboxModule,


    ],
  providers: [{
    provide: DataService,
    useClass: ApiService // <--- Defining the swappable implementation.
  },
    HttpClient,
    DataParamService,
    ApiPlanManager,
    ApiSpeakerManager,
    RequestManager,
    EnvServiceProvider,
    FilterPlanningsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
