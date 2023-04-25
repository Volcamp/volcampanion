import {Component} from '@angular/core';
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
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      addIcons(iconRegistry,sanitizer)
  }

}
