import {AfterViewInit, Component} from '@angular/core';
import {AppRoutes, toRoute} from "../../app/AppRoutes";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.sass']
})

export class BottomNavBarComponent implements AfterViewInit {
  homeRoute = toRoute(AppRoutes.HOME_ROUTE)
  speakerRoute = toRoute(AppRoutes.SPEAKER_ROUTE)
  favoriteRoute = toRoute(AppRoutes.FAVORITE_ROUTE)

  defaultRoot = this.homeRoute

  onClick(event: any) {
    const buttons = document.querySelectorAll(CLASS_BTN_NAME);
    buttons.forEach((button) => {
      button.classList.remove(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.add(CLASS_BTN_STYLE, CLASS_BTN_COLOR);
  }

  ngAfterViewInit(): void {
    let button = document.getElementById(location.pathname);
    if (button == null) {
      button = document.getElementById(this.defaultRoot);
    }
    button!.classList.add(CLASS_BTN_STYLE, CLASS_BTN_COLOR);


  }
}

export const CLASS_BTN_NAME = 'button.iconBtn';
export const CLASS_BTN_STYLE = 'mat-flat-button';
export const CLASS_BTN_COLOR = 'mat-warn';
