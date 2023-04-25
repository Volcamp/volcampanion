import {Component, DoCheck} from '@angular/core';
import {HOME_ROUTE, SPEAKER_ROUTE} from "../../app/ConstRouterPath";

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.sass']
})

export class BottomNavBarComponent implements DoCheck {
  colorFav: string = ""
  colorSession: string = ""
  colorSpeakers: string = ""
  selectedColor = "warn"

  ngDoCheck(): void {
    this.colorFav = ""
    this.colorSession = ""
    this.colorSpeakers = ""
    if (location.pathname === "/" + HOME_ROUTE)
      this.colorSession = this.selectedColor
    if (location.pathname === "/" + SPEAKER_ROUTE)
      this.colorSpeakers = this.selectedColor
  }
}
