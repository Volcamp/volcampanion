import {Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.sass']
})

export class BottomNavBarComponent implements DoCheck{
  colorFav : string=""
  colorSession : string=""
  colorSpeakers : string=""


  ngDoCheck(): void {
    this.colorFav =""
    this.colorSession =""
    this.colorSpeakers =""
    if(location.pathname==='/home')
      this.colorSession='warn'
    if(location.pathname==='/speakers')
      this.colorSpeakers='warn'
  }
}
