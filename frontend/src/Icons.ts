import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

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

export const TWITTER =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
`;

export const LINKEDIN =
  `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>
`;

export const SEND = `
<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
    <path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z"/>
</svg>
`;

export const BUSINESS = `
<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
    <path d="M140-120q-24 0-42-18t-18-42v-489q0-24 18-42t42-18h190v-91q0-24 18-42t42-18h180q24 0 42 18t18 42v91h190q24 0 42 18t18 42v489q0 24-18 42t-42 18H140Zm250-609h180v-91H390v91Zm430 358H571v60H391v-60H140v191h680v-191Zm-369 0h60v-60h-60v60Zm-311-60h251v-60h180v60h249v-238H140v238Zm340 30Z"/>
</svg>
`;


export function addIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIconLiteral('favorite_checked', sanitizer.bypassSecurityTrustHtml(FAVORITE_CHECKED));
  iconRegistry.addSvgIconLiteral('favorite_unchecked', sanitizer.bypassSecurityTrustHtml(FAVORITE_UNCHECKED));
  iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(TWITTER));
  iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(LINKEDIN));
  iconRegistry.addSvgIconLiteral('send', sanitizer.bypassSecurityTrustHtml(SEND));
  iconRegistry.addSvgIconLiteral('business', sanitizer.bypassSecurityTrustHtml(BUSINESS));

}
