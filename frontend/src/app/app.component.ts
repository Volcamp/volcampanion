import {Component, HostListener} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {addIcons} from "../Icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'volcampanion-pwa';
  isMobile: boolean = false;

  ngOnInit() {
    this.isMobile = window.innerWidth < 1024;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 1024;
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    addIcons(iconRegistry, sanitizer)
  }
}
