import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

//Clean existing storage entry at startup
Object.keys(localStorage)
  .forEach((value, index) => {
    localStorage.removeItem(value);
  })

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
