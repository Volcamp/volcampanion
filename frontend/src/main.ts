import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {TOKEN} from "./services/UserService";
import {datesKey, daysKey, storageKey} from "./services/LocalStorageFavoriteService";
import {feedbackKey} from "./services/LocalStorageFeedbacksService";

//Clean existing storage entry at startup
Object.keys(localStorage)
  .forEach((value, index) => {
    if (value !== TOKEN && value !== storageKey && value !== datesKey && value !== daysKey && !value.startsWith(feedbackKey)) { //Whitelist user token
      localStorage.removeItem(value);
    }
  })

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
