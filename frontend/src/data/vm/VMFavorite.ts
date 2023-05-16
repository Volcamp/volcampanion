import {OidcSecurityService} from "angular-auth-oidc-client";
import {DataService} from "../services-datas/DataService";

export class VMFavorite {
  logged: boolean = false;
  inFavorite: boolean = false;

  constructor(private oidcSecurityService: OidcSecurityService, private dataService: DataService) {
    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
      this.logged = isAuthenticated;
    });
  }

  removeFavorite(talkId: number) {
    if (this.logged) {
      this.dataService.removeTalkFromFavorite(talkId);
      this.inFavorite = false;
    }

  }

  addFavorite(talkId: number) {
    if (this.logged) {
      this.dataService.addTalkToFavorite(talkId);
      this.inFavorite = true;
    }
  }
}
