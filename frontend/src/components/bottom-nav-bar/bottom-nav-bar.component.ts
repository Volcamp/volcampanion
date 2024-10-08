import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
import {AppRoutes, toRoute} from "../../app/AppRoutes";
import {UserService} from "../../services/UserService";
import {LogEventArgs} from "../../event/LogEventArgs";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.sass']
})
export class BottomNavBarComponent implements AfterViewInit, OnInit {
  @Input() isMobile!: boolean;

  homeRoute = toRoute(AppRoutes.HOME_ROUTE)
  infosRoute = toRoute(AppRoutes.INFOS_ROUTE)
  speakerRoute = toRoute(AppRoutes.SPEAKER_ROUTE)
  favoriteRoute = toRoute(AppRoutes.FAVORITE_ROUTE)

  defaultRoot = this.homeRoute
  logged: boolean = false;

  constructor(private userService: UserService) {

  }

  onClick(event: any) {
    const buttons = document.querySelectorAll(CLASS_BTN_NAME);
    buttons.forEach((button) => {
      button.classList.remove(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.add(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
    this.defaultRoot = clickedButton?.id!;
  }

  ngAfterViewInit(): void {
    if (this.isMobile) {
      let button;
      if (location.pathname.toLowerCase().includes(this.homeRoute)) {
        button = document.getElementById(this.homeRoute);
      } else if (location.pathname.toLowerCase().includes(this.speakerRoute)) {
        button = document.getElementById(this.speakerRoute);
      } else if (location.pathname.toLowerCase().includes(this.favoriteRoute)) {
        button = document.getElementById(this.favoriteRoute);
      } else if (location.pathname.toLowerCase().includes(this.infosRoute)) {
        button = document.getElementById(this.infosRoute);
      } else {
        button = document.getElementById(this.defaultRoot)
      }
      button?.classList.add(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
      this.defaultRoot = button?.id!;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isMobile) {
      const buttons = document.querySelectorAll(CLASS_BTN_NAME);
      buttons.forEach((button) => {
        button.classList.remove(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
      }); // ----> not necessary but just to be sure
      document.getElementById(this.defaultRoot)?.classList.add(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
    }
  }

  ngOnInit(): void {
    this.logged = this.userService.isLogged();
    this.userService.logEventEmitter.on((data: LogEventArgs) => {
      this.logged = data.IsLog
    });
  }
}

export const CLASS_BTN_NAME = 'button.iconBtn';
export const CLASS_BTN_STYLE = 'mat-flat-button';
export const CLASS_BTN_COLOR = 'mat-warn';
