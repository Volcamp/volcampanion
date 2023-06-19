import {Component, HostListener} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {addIcons} from "../Icons";
import {UserService} from "../services/UserService";
import {LogEventArgs} from "../event/LogEventArgs";
import {switchUserTheme} from "../common/Theme";
import {AbstractTalkFavoriteService} from "../services/abstract/AbstractTalkFavoriteService";
import {AbstractConferenceService} from "../services/abstract/AbstractConferenceService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'volcampanion-pwa';
  isMobile: boolean = false;
  isAdmin: boolean;
  padding: number = 0;
  logged: boolean = false;


  ngOnInit() {
    this.isMobile = window.innerWidth < 1024;
  }

  ngAfterViewInit(){
    // @ts-ignore
    setTimeout(_  =>this.padding  = document.getElementById('header')!.offsetHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 1024;
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private userService: UserService,
              private favoriteService: AbstractTalkFavoriteService,private abstractConferenceService: AbstractConferenceService) {
    switchUserTheme();
    addIcons(iconRegistry, sanitizer);
    this.logged = this.userService.isLogged();
    this.isAdmin = userService.isAdmin();
    userService.logEventEmitter.on((data: LogEventArgs) => {
      this.isAdmin = userService.isAdmin();
      this.logged = this.userService.isLogged();
    });
    if(this.userService.isLogged()){
      this.abstractConferenceService.getCurrentConference().subscribe(conf => {
        this.favoriteService.getFavorites(conf.id.toString(),true).subscribe();
      })
    }

  }


}
