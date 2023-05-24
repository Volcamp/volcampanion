import {Component, HostListener} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {addIcons} from "../Icons";
import {UserService} from "../services/UserService";
import {LogEventArgs} from "../event/LogEventArgs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'volcampanion-pwa';
  isMobile: boolean = false;
  document = document;
  isAdmin: boolean;



  ngOnInit() {
    this.isMobile = window.innerWidth < 1024;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 1024;
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private userService : UserService) {
    addIcons(iconRegistry, sanitizer)
    this.isAdmin = userService.isAdmin();
    userService.logEventEmitter.on((data: LogEventArgs) => {
      this.isAdmin = userService.isAdmin()
    });
  }
}
