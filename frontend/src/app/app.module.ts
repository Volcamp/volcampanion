import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {HomeComponent} from "../Page/home/home.component";
import {BottomNavBarComponent} from "../Components/bottom-nav-bar/bottom-nav-bar.component";
import {TopBarComponent} from "../Components/top-bar/top-bar.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {TalkMiniViewComponent} from "../Components/talk-mini-view/talk-mini-view.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatBadgeModule} from "@angular/material/badge";
import {TalksListComponent} from "../Components/talks-list/talks-list.component";
import {MatDividerModule} from "@angular/material/divider";
import {BreakMiniViewComponent} from "../Components/break-mini-view/break-mini-view.component";
import {DividerMiniViewComponent} from "../Components/divider-mini-view/divider-mini-view.component";
import {DataService} from "../Data/ServicesDatas/DataService";
import {StubService} from "../Data/ServicesDatas/StubDatas/StubService";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottomNavBarComponent,
    TopBarComponent,
    TalkMiniViewComponent,
    TalksListComponent,
    BreakMiniViewComponent,
    DividerMiniViewComponent
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

    ],
  providers: [{
    provide: DataService,
    useClass: StubService // <--- Defining the swappable implementation.
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
