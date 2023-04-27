import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppRoUtes, toRoute} from "../../app/AppRoUtes";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.sass']
})

export class BottomNavBarComponent implements AfterViewInit{
  homeRoute=toRoute(AppRoUtes.HOME_ROUTE)
  speakerRoute=toRoute(AppRoUtes.SPEAKER_ROUTE)
  favoriteRoute=toRoute(AppRoUtes.FAVORITE_ROUTE)
  defaultRoot=this.homeRoute

  onClick(event: any) {
    const buttons = document.querySelectorAll('button.example-icon');
    buttons.forEach((button) => {
      button.classList.remove('mat-flat-button', 'mat-warn');
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.add('mat-flat-button', 'mat-warn');
  }

  ngAfterViewInit(): void {
    console.log(location.pathname)
    let button = document.getElementById(location.pathname);
    if(button==null ){
      button = document.getElementById(this.defaultRoot);
    }
    button!.classList.add('mat-flat-button', 'mat-warn');


  }


}
