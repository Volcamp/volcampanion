import {Component, DoCheck, Input, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import {Router, NavigationStart, Event as NavigationEvent, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})


export class TopBarComponent   {
  @Input() backable: boolean = false
  constructor(private navigation: NavigationService, private router: Router) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationEnd) {
            this.change()
          }
        });
  }
  back(): void {
    this.navigation.back()
  }
  change() {
    this.backable = this.router.url.slice(1).includes("/");
  }
}
