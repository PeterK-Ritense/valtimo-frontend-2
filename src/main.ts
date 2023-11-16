import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {VALib} from './app/window-lib/va-window-lib';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

VALib();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
