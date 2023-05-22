import {OidcSecurityService} from "angular-auth-oidc-client";
import {DataService} from "angular-auth-oidc-client/lib/api/data.service";

export class VMFavorite {
  logged: boolean = false;
  inFavorite: boolean = false;

  constructor(private oidcSecurityService: OidcSecurityService) {
    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
      this.logged = isAuthenticated;
    });
  }

  removeFavorite(talkId: number) {
    if (this.logged) {
      this.inFavorite = false;
    }

  }

  addFavorite(talkId: number) {
    if (this.logged) {
      this.inFavorite = true;
    }
  }
}
