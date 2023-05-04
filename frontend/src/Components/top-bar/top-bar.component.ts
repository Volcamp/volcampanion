import {Component, Input} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Router} from "@angular/router";
import {EventBackArrowVisibility} from "../../event/EventBackArrowVisibility";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})


export class TopBarComponent {
  @Input() backable: boolean = false

  constructor(private navigation: NavigationService, private router: Router) {
    navigation.eventEmitter.on(EventBackArrowVisibility.name, (data: EventBackArrowVisibility) => this.change(data.data))

  }

  back(): void {
    this.navigation.back()
  }

  public change(backable: boolean) {
    this.backable = backable;
  }
}
