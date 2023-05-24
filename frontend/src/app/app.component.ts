import {Component, HostListener, Inject} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {addIcons} from "../Icons";
import {UserService} from "../services/UserService";
import {LogEventArgs} from "../event/LogEventArgs";
import {DOCUMENT} from "@angular/common";
import {switchUserTheme} from "../common/Theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'volcampanion-pwa';
  isMobile: boolean = false;
  isAdmin: boolean;
  padding : number = 0;


  ngOnInit() {
    this.isMobile = window.innerWidth < 1024;
    this.padding = document.getElementById('header')!.offsetHeight
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 1024;
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private userService : UserService) {
    switchUserTheme();
    addIcons(iconRegistry, sanitizer)
    this.isAdmin = userService.isAdmin();
    userService.logEventEmitter.on((data: LogEventArgs) => {
      this.isAdmin = userService.isAdmin()
    });
  }


}
