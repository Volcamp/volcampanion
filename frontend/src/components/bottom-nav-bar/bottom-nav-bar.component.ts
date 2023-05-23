import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AppRoutes, toRoute} from "../../app/AppRoutes";
import {UserService} from "../../services/UserService";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.sass']
})
export class BottomNavBarComponent implements AfterViewInit, OnInit {
  @Input() isMobile!: boolean;

  homeRoute = toRoute(AppRoutes.HOME_ROUTE)
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
  }

  ngAfterViewInit(): void {
    if (this.isMobile) {

      let button = document.getElementById(location.pathname);
      if (button == null) {
        if (location.pathname.toLowerCase().includes(this.homeRoute)) {
          button = document.getElementById(this.homeRoute);
        } else if (location.pathname.toLowerCase().includes(this.speakerRoute)) {
          button = document.getElementById(this.speakerRoute);
        } else if (location.pathname.toLowerCase().includes(this.favoriteRoute)) {
          button = document.getElementById(this.favoriteRoute);
        } else {
          return
        }
      }
      button!.classList.add(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
    }


  }

  ngOnInit(): void {
    this.logged = this.userService.isLogged();
  }
}

export const CLASS_BTN_NAME = 'button.iconBtn';
export const CLASS_BTN_STYLE = 'mat-flat-button';
export const CLASS_BTN_COLOR = 'mat-warn';
