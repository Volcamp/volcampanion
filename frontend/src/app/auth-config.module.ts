import {NgModule} from '@angular/core';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://dev-stage-v.eu.auth0.com',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '2eAYdLNN4GLSayD45bKjL5kyhmLi6b5E',
        scope: 'openid profile offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
        customParamsAuthRequest: {audience: 'https://volcamp-api-dev.azurewebsites.net/',},
        customParamsRefreshTokenRequest: {scope: 'openid profile offline_access',},
      },
    }),
  ],
  providers: [],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
