import {LogLevel} from "angular-auth-oidc-client";

export const environment = {
  production: true,
  apiUrl : 'https://volcamp-api.cleverapps.io/',
  openIdClient: {
    authority: 'https://dev-stage-v.eu.auth0.com',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: '2eAYdLNN4GLSayD45bKjL5kyhmLi6b5E',
    scope: 'openid profile email offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    logLevel: LogLevel.Error,
    customParamsAuthRequest: {audience: 'https://volcamp-api.cleverapps.io/',},
    customParamsRefreshTokenRequest: {scope: 'openid profile offline_access',},
  },
};
