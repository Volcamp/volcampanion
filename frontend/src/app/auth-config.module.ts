import {NgModule} from '@angular/core';
import {AuthModule} from 'angular-auth-oidc-client';
import {environment} from '../environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: environment.openIdClient,
    }),
  ],
  providers: [],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
