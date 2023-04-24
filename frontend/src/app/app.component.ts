import {Component, InjectionToken} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {DataService} from "../Data/ServicesDatas/DataService";


export const FAVORITE_CHECKED =
  `
  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
    <path d="M440 936 321 829q-78-71-132-124.5T102 606q-33-45-47.5-86T40 433q0-90 60.5-153.5T250 216q57 0 105.5 27t84.5 78q42-54 89-79.5T630 216q76 0 133.5 52T835 388q-19-7-35-9.5t-34-2.5q-105 0-175.5 70T520 616q0 51 21 98t59 80q-26 23-58 51t-61 54l-41 37Zm278-207-99-99 42-42 57 56 141-141 42 42-183 184Z"/>
  </svg>
`;

export const FAVORITE_UNCHECKED =
  `
  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
    <path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/>
  </svg>
`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'volcampanion-pwa';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('favorite_checked', sanitizer.bypassSecurityTrustHtml(FAVORITE_CHECKED));
    iconRegistry.addSvgIconLiteral('favorite_unchecked', sanitizer.bypassSecurityTrustHtml(FAVORITE_UNCHECKED));
  }

}
