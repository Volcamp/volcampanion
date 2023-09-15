import {LogLevel} from "angular-auth-oidc-client";

export const environment = {
  production: true,
  apiUrl : 'https://volcampanion-api.cleverapps.io/',
  openIdClient: {
    authority: 'https://volcamp.eu.auth0.com',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'TGT9On2A4znX4IpNQJIW9aUbl3huMiJG',
    scope: 'openid profile email offline_access',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    logLevel: LogLevel.Error,
    customParamsAuthRequest: {audience: 'https://volcampanion-api.cleverapps.io/',},
    customParamsRefreshTokenRequest: {scope: 'openid profile offline_access',},
  },
};
