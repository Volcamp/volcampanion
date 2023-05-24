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
import {SpeakerTeaserViewComponent} from "../components/speaker-teaser-view/speaker-teaser-view.component";
import {SpeakersListComponent} from "../components/speakers-list/speakers-list.component";
import {SpeakerPageComponent} from "../page/speaker-page/speaker-page.component";
import {AddFavoriteComponent} from "../components/add-favorite/add-favorite.component";
import {DetailTalkComponent} from "../page/detail-talk/detail-talk.component";
import {SpeakerPreviewComponent} from "../components/speaker-preview/speaker-preview.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {DetailSpeakerComponent} from "../page/detail-speaker/detail-speaker.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PlanningService} from "../services/PlanningService";
import {SpeakerService} from "../services/SpeakerService";
import {RequestManager} from "../data/RequestManager";
import {TwitterBtnComponent} from "../components/twitter-btn/twitter-btn.component";
import {LinkedinBtnComponent} from "../components/linkedin-btn/linkedin-btn.component";
import {FilterMenuComponent} from "../components/filter-menu/filter-menu.component";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatChipsModule} from "@angular/material/chips";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {AbstractPlanningService} from "../services/AbstractPlanningService";
import {AbstractSpeakerService} from "../services/AbstractSpeakerService";
import {AbstractConferenceService} from "../services/AbstractConferenceService";
import {ConferenceService} from "../services/ConferenceService";
import {AbstractTalkService} from "../services/AbstractTalkService";
import {TalkService} from "../services/TalkService";
import {NotFoundComponent} from "../page/not-found-page/not-found/not-found.component";
import {SunComponent} from "../page/not-found-page/sun/sun.component";
import {CloudComponent} from "../page/not-found-page/cloud/cloud.component";
import {VolcampRateComponent} from "../components/volcamp-rate/volcamp-rate.component";
import {LoaderComponent} from "../components/loader/loader.component";
import {MatMenuModule} from "@angular/material/menu";
import {AuthConfigModule} from "./auth-config.module";
import {VolcampFeedbackComponent} from "../components/volcamp-feedback/volcamp-feedback.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {AbstractThemeService} from "../services/AbstractThemeService";
import {ThemeService} from "../services/ThemeService";
import {AbstractFormatService} from "../services/AbstractFormatService";
import {FormatService} from "../services/FormatService";
import {UserService} from "../services/UserService";
import {AbstractTalkFavoriteService} from "../services/AbstractTalkFavoriteService";
import {TalkFavoriteService} from "../services/TalkFavoriteService";
import {FavoriteComponent} from "../page/favorite/favorite.component";
import {FilterPlanningsService} from "../services/FilterPlanningsService";
import {DataParamService} from "../services/DataParamService";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {AdminPlanningsComponent} from "../page/admin-plannings/admin-plannings.component";
import {AdminSideNavComponent} from "../components/admin-side-nav/admin-side-nav.component";
import {AdminTalksComponent} from "../page/admin-talks/admin-talks.component";
import {AdminSpeakerComponent} from "../page/admin-speaker/admin-speaker.component";
import {AdminTalkPreviewComponent} from "../components/admin-talk-preview/admin-talk-preview.component";
import {AdminTalkListComponent} from "../components/admin-talk-list/admin-talk-list.component";
import {AdminDeleteBtnComponent} from "../components/admin-delete-btn/admin-delete-btn.component";
import {
  AdminDialogDeleteTalkComponent
} from "../components/admin-dialog-delete-talk/admin-dialog-delete-talk.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {AdminEditBtnComponent} from "../components/admin-edit-btn/admin-edit-btn.component";
import {AdminAddBtnComponent} from "../components/admin-add-btn/admin-add-btn.component";

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
    VolcampRateComponent,
    LoaderComponent,
    VolcampFeedbackComponent,
    FavoriteComponent,
    AdminPlanningsComponent,
    AdminSideNavComponent,
    AdminTalksComponent,
    AdminSpeakerComponent,
    AdminTalkPreviewComponent,
    AdminTalkListComponent,
    AdminDeleteBtnComponent,
    AdminDialogDeleteTalkComponent,
    AdminEditBtnComponent,
    AdminAddBtnComponent,
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
    MatMenuModule,
    AuthConfigModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,


  ],
  providers: [{
    provide: AbstractPlanningService,
    useClass: PlanningService // <--- Defining the swappable implementation.
  },
    {
      provide: AbstractSpeakerService,
      useClass: SpeakerService // <--- Defining the swappable implementation.
    },
    {
      provide: AbstractConferenceService,
      useClass: ConferenceService // <--- Defining the swappable implementation.
    },
    {
      provide: AbstractTalkService,
      useClass: TalkService // <--- Defining the swappable implementation.
    },
    {
      provide: AbstractThemeService,
      useClass: ThemeService // <--- Defining the swappable implementation.
    },
    {
      provide: AbstractFormatService,
      useClass: FormatService // <--- Defining the swappable implementation.
    },
    {
      provide: AbstractTalkFavoriteService,
      useClass: TalkFavoriteService // <--- Defining the swappable implementation.
    },
    HttpClient,
    DataParamService,
    RequestManager,
    FilterPlanningsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
